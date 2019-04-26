var util = require('util');
var Client = require('node-rest-client').Client;
var dateFormat = require('date-format');

//////////////////////////////////////////////////////////
// Config
//////////////////////////////////////////////////////////

//var sxServer = "streams.opcau.com";
//var sxPort = 9004;
//var sxServerUrl = "http://"+sxServer+":"+sxPort;
//var dbServer = "sharedb.opcau.com";
var dbServer = "anki.opcau.com";
var dbServerUrl = "https://"+dbServer+"/apex/pdb1/anziot";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var fs = require('fs');
// Pi or VM?
var devId = "";
devId = ""+fs.readFileSync("/home/oracle/DevId.txt");
devId=devId.trim();
console.log("DevId: '"+devId+"'");

var groupId = process.env.GroupID;
console.log("GroupId: '"+groupId+"'");

// Setup for websockets
var WebSocketServer = require('ws').Server
var clientConnection = new Array();
var wss = new WebSocketServer({host: '0.0.0.0',port: 7802});
console.log('New server created, waiting for connections on 7802');

// Add the connection listener that will be triggered once the connection is established.
wss.on('connection', function(ws,msg) {
  console.log('Client connected for data stream');
  console.log("url: "+util.inspect(msg.url));
  //const URL = require('url-parse');
  //const myURL = new URL(msg.url);
  const queryString = require('query-string');
  const parsedUrl = queryString.parseUrl(msg.url);
  console.log("parsedUrl: "+util.inspect(parsedUrl));
  var carsToSend="all";
  var eventsToSend="all";
  if(typeof parsedUrl.query !== 'undefined') {
    console.log("query: "+util.inspect(parsedUrl.query));
    if(typeof parsedUrl.query.cars !== 'undefined') {
      console.log("cars: "+util.inspect(parsedUrl.query.cars));
      carsToSend=parsedUrl.query.cars.toLowerCase();
    }
    if(typeof parsedUrl.query.events !== 'undefined') {
      console.log("events: "+util.inspect(parsedUrl.query.events));
      eventsToSend=parsedUrl.query.events.toLowerCase();
    }
  }
  clientConnection.push({ socket: ws, cars: carsToSend, events: eventsToSend });
    //  Add the listener for that particular websocket connection instance.
    ws.on('message', function(message) {
        console.log('Server received message: %s', message);
        // Send back the message that we receive from the browser
        ws.send(message);
    });
});


var trackCount = {};
var currentDirection=-1;
var startPassed=0;
var finishMissed=0;
var sendBatteryFrequency=2;
var sendBatteryCount=0;

var client = new Client();

var trackMap = require('./trackMap.js')();

var trackTransition=false;

var lapTimes = {};
var lapNumbers = {};

client.on('requestTimeout', function (req) {
    console.log('request has expired');
    client.abort();
});
 
client.on('responseTimeout', function (res) {
    console.log('response has expired');
 
});
 
//it's usefull to handle request errors to avoid, for example, socket hang up errors on request timeouts 
client.on('error', function (err) {
    console.log('request error', err);
    });


module.exports = function() {
  return {
    "parse" : function(carName,address,data,displayName) {
      var msgId = data.readUInt8(1);

      //console.log("Message[0x"+msgId.toString(16)+"]: ",data);
      if (msgId == 0x17) { // ANKI_VEHICLE_MSG_V2C_PING_RESPONSE
        console.log("Message[0x"+msgId.toString(16)+"][Ping Response]: ",data);
      }

      else if (msgId == 0x19) { // ANKI_VEHICLE_MSG_V2C_VERSION_RESPONSE
        var version = data.readUInt16LE(2);
        console.log("Message["+msgId.toString(16)+"][Version]: "+version.toString(16));
      }

      else if (msgId == 0x1b) { // ANKI_VEHICLE_MSG_V2C_BATTERY_LEVEL_RESPONSE
        var level = data.readUInt16LE(2);
        var MAX_BATTERY_LEVEL=3800 // This is assumed from experience.
        //console.log("Message[0x"+msgId.toString(16)+"][Battery Level1][",data,"]: "+level);
        //console.log("Message[0x"+msgId.toString(16)+"][Battery Level]: "+Math.floor((level / MAX_BATTERY_LEVEL) * 100)+"%");
        //var fullUrl = sxServerUrl+"/v6battery";
        var fullUrl = dbServerUrl+"/v5_anki/battery/";
        var dateTime = new Date().getTime();
        var args = {
          data: {"eventtype": "battery", "groupid":""+groupId,"deviceid":""+devId,"datetime":dateTime,"datetimestr":dateFormat.asString(),"carid":address,"carname":displayName,"batterylevel":level },
          headers: { "Content-Type": "application/json" },
          requestConfig: {
              rejectUnauthorized: false,
              timeout: 1000, //request timeout in milliseconds 
              noDelay: true, //Enable/disable the Nagle algorithm 
              keepAlive: true, //Enable/disable keep-alive functionalityidle socket. 
              keepAliveDelay: 1000 //and optionally set the initial delay before the first keepalive probe is sent 
          },
          responseConfig: {
              timeout: 1000 //response timeout 
          }
        }
        var req = client.post(fullUrl, args, function(data,response) { });
        req.on('requestTimeout', function (req) { console.log('request has expired'); req.abort(); });
        req.on('responseTimeout', function (res) { console.log('response has expired'); });
        req.on('error', function (err) { console.log('request error', err); });
        //
        // If there are any listening clients, send the data to them
        //
        var numClients = clientConnection.length;
        var newClientConnection = clientConnection.slice(0);
        for(var i=0;i<numClients;i++) {
          if(clientConnection[i].events === "all" || clientConnection[i].events.indexOf('battery') > -1) {  // This client wants this event
            if(clientConnection[i].cars === "all" || clientConnection[i].cars.indexOf(displayName.toLowerCase()) > -1) { // This client wants this car
              try {
                clientConnection[i].socket.send(JSON.stringify(args.data));
              } catch (ex) {
                console.log("error sending.  Removing client: "+ex);
                newClientConnection.splice(i,1);
              }
            }
          }
        }
        clientConnection=newClientConnection.slice(0);
      }

      // Lights
      else if (msgId == 0x1d) { // ANKI_VEHICLE_MSG_C2V_SET_LIGHTS
        console.log("************************* Set Lights.");
      }

      // Driving Commands
      else if (msgId == 0x24) { // ANKI_VEHICLE_MSG_C2V_SET_SPEED
        console.log("************************* Set Speed.");
        console.log("Set Speed Msg: "+fullUrl);
      }

      else if (msgId == 0x25) { // ANKI_VEHICLE_MSG_C2V_CHANGE_LANE
        console.log("************************* Change Lane.");
      }

      else if (msgId == 0x26) { // ANKI_VEHICLE_MSG_C2V_CANCEL_LANE_CHANGE
        console.log("************************* Cancel Change Lane.");
      }

      else if (msgId == 0x32) { // ANKI_VEHICLE_MSG_C2V_TURN_180
        console.log("************************* U-Turn.");
      }

      else if (msgId == 0x2c) { // ANKI_VEHICLE_MSG_C2V_SET_OFFSET_FROM_ROAD_CENTER
      }

      // Vehicle position notifications
      //     uint8_t     size;
      // uint8_t     msg_id;
      // uint8_t     _reserved[2];
      // float       offset_from_road_center_mm;
      // uint16_t    speed_mm_per_sec;
      // uint8_t     is_clockwise;

      else if (msgId == 0x27) { // ANKI_VEHICLE_MSG_V2C_LOCALIZATION_POSITION_UPDATE
        //              0         1         2         3         4         5         6         7         8         9
        //
        // The jump kit and landing are Jump(43) and Landing(46).  For mapping purposes, they are set to 'Straight'
        var trackLocation = data.readUInt8(2);
        var trackId = data.readUInt8(3);
        var offset = data.readFloatLE(4);
        var speed = data.readUInt16LE(8);
        var clockwise = false;
        if(data.readUInt8(10) == 0x47) {
          clockwise = true;
        }
        console.log("Message[0x"+msgId.toString(16)+"][Position Update]: ",data," Location: ",trackLocation.toString(16)," id:(",trackId,") ",trackId.toString(16)," offset: ",offset," speed: "+speed+" clockwise: ",clockwise);
        if(trackId == 33) {
          //console.log("********** Start");
          trackCount[carName] = 0;
          currentDirection=3; // west
          // If we see two start events without a finish event, we have to assume we missed the finish event and a lap has been made.
          // So, let's change this to a finish trackid so the code will run a lap and reset things.
          if( startPassed == 1) { // Two starts without a finish.
            console.log("Start seen twice without finish");
            finishMissed = 1;
          } else {
            startPassed=1;
          }
        }
        if(trackId == 34 || finishMissed == 1) {
          if(finishMissed = 1) { // Pretend we have seen a finish so we can do a laptime, then reset the values.
            console.log("Setting a pretend finish line.");
            finishMissed = 0;
            startPassed =0 ;
          }
          //console.log("********** Finish");
          currentDirection=3; // west
          var now = new Date();
          if (lapTimes[carName] === undefined ) {
            //console.log("LapTime does not exist for car '"+carName+"'.");
            lapTimes[carName] = new Date();
            lapNumbers[carName] = 1;
          }
          else {
            var totalLapTime = (new Date()) - lapTimes[carName];
            if(totalLapTime > 1000) // Ignore extreamly short laptimes
            {
              // Send a lap event
              //var fullUrl = sxServerUrl+"/v6lap";
              var fullUrl = dbServerUrl+"/v5_anki/lap/";
              var lapNumber = lapNumbers[carName];
              lapTimes[carName] = new Date(); // For next lap
              lapNumbers[carName] =  lapNumbers[carName] + 1;
              var dateTime = new Date().getTime();
              console.log("*******************Sending lap event: car: '"+carName+"' lapnum: '"+lapNumber+"' time: '"+totalLapTime+"' for track count '"+trackCount[carName]+"'");
              var args = {
                data: {"eventtype": "lap", "groupid":""+groupId,"deviceid":""+devId,"datetime":""+dateTime,"datetimestr":dateFormat.asString(),"carid":address,"carname":displayName,"lapnumber": lapNumber, "laptime": totalLapTime, "trackcount": trackCount[carName]},
                headers: { "Content-Type": "application/json" },
                requestConfig: {
                    rejectUnauthorized: false,
                    timeout: 1000, //request timeout in milliseconds 
                    noDelay: true, //Enable/disable the Nagle algorithm 
                    keepAlive: true, //Enable/disable keep-alive functionalityidle socket. 
                    keepAliveDelay: 1000 //and optionally set the initial delay before the first keepalive probe is sent 
                },
                responseConfig: {
                    timeout: 1000 //response timeout 
                }
              }
              var req = client.post(fullUrl, args, function(data,response) { });
              req.on('requestTimeout', function (req) { console.log('request has expired'); req.abort(); });
              req.on('responseTimeout', function (res) { console.log('response has expired'); });
              req.on('error', function (err) { console.log('request error', err); });
              //
              // If there are any listening clients, send the data to them
              //
              var numClients = clientConnection.length;
              var newClientConnection = clientConnection.slice(0);
              for(var i=0;i<numClients;i++) {
                if(clientConnection[i].events === "all" || clientConnection[i].events.indexOf('lap') > -1) {  // This client wants this event
                  if(clientConnection[i].cars === "all" || clientConnection[i].cars.indexOf(displayName.toLowerCase()) > -1) { // This client wants this car
                    try {
                      console.log("Sending lap to client: "+i);
                      clientConnection[i].socket.send(JSON.stringify(args.data));
                    } catch (ex) {
                      console.log("error sending.  Removing client: "+ex);
                      newClientConnection.splice(i,1);
                    }
                  }
                }
              }
            }
          }
          trackCount[carName]=0;
        }
        //var fullUrl = sxServerUrl+"/v6speed";
        var fullUrl = dbServerUrl+"/v5_anki/speed/";
        var dateTime = new Date().getTime();
        var args = {
          data: {"eventtype": "speed", "groupid":""+groupId, "deviceid":""+devId,"datetime":""+dateTime,"datetimestr":dateFormat.asString(),"carid":address,"carname":displayName,"speed":speed },
          headers: { "Content-Type": "application/json" },
          requestConfig: {
              rejectUnauthorized: false,
              timeout: 1000, //request timeout in milliseconds 
              noDelay: true, //Enable/disable the Nagle algorithm 
              keepAlive: true, //Enable/disable keep-alive functionalityidle socket. 
              keepAliveDelay: 1000 //and optionally set the initial delay before the first keepalive probe is sent 
          },
          responseConfig: {
              timeout: 1000 //response timeout 
          }
        }
        console.log("Send speed to OSA.");
        var req = client.post(fullUrl, args, function(data,response) { });
        req.on('requestTimeout', function (req) { console.log('request has expired'); req.abort(); });
        req.on('responseTimeout', function (res) { console.log('response has expired'); });
        req.on('error', function (err) { console.log('request error', err); });

        //
        // If there are any listening clients, send the data to them
        //
        var numClients = clientConnection.length;
        var newClientConnection = clientConnection.slice(0);
        for(var i=0;i<numClients;i++) {
          if(clientConnection[i].events === "all" || clientConnection[i].events.indexOf('speed') > -1) {  // This client wants this event
            if(clientConnection[i].cars === "all" || clientConnection[i].cars.indexOf(displayName.toLowerCase()) > -1) { // This client wants this car
              try {
                clientConnection[i].socket.send(JSON.stringify(args.data));
              } catch (ex) {
                console.log("error sending.  Removing client: "+ex);
                newClientConnection.splice(i,1);
              }
            }
          }
        }
        clientConnection=newClientConnection.slice(0);
      }

      // Message[0x29][Track Event]:  <Buffer 12 29 00 00 10 bf 1f 49 00 ff ff 00 00 54 01 00 00 37 36>
      // It looks like this event has changed from the SDK.  After much trial/error, I found an interesting bit of info from the message to help me figure out the shape of the track.
      else if (msgId == 0x29) { // ANKI_VEHICLE_MSG_V2C_LOCALIZATION_TRANSITION_UPDATE
        console.log("Message[0x"+msgId.toString(16)+"][Track Event]: ",data);
        console.log("Size: "+data.length);
        // Also send battery info
        //console.log("Request Battery Level: "+carName);
        if(sendBatteryCount > sendBatteryFrequency) {
          client.get("http://localhost:7801/requestBatteryLevel/"+carName, function(data,response) {
          });
          sendBatteryCount=0;
        } else {
          sendBatteryCount++;
        }

//        console.log("Data length: "+data.length);
        if(data.length < 18) {
          return; // Sometimes we get an odd msg.
        }
        trackTransition=true;
        var leftWheelDistance = 0;
        var rightWheelDistance = 0;
        var fromTrackId=data.readUInt8(2);
        var toTrackId=data.readUInt8(3);
        var lanemm=data.readFloatLE(4);
        if(data.length == 19) {
          leftWheelDistance = data.readUInt8(17);
          rightWheelDistance = data.readUInt8(18);
        } else {
          leftWheelDistance = data.readUInt8(16);
          rightWheelDistance = data.readUInt8(17);
        }
        trackStyle=""
        if (leftWheelDistance == rightWheelDistance) { trackStyle="Straight"; }
        else if (leftWheelDistance == (rightWheelDistance+1)) { trackStyle="Straight"; }
        else if (leftWheelDistance == (rightWheelDistance-1)) { trackStyle="Straight";}
        else if (leftWheelDistance == (rightWheelDistance+2)) { trackStyle="Straight";}
        else if (leftWheelDistance == (rightWheelDistance-2)) { trackStyle="Straight";}
        else if (leftWheelDistance > rightWheelDistance) { trackStyle="Right Turn";}
        else if (leftWheelDistance < rightWheelDistance) { trackStyle="Left Turn";}

        // There is a shorter segment for the starting line track.
        crossedStartingLine = "";
        if ((leftWheelDistance < 0x25) && (leftWheelDistance > 0x19) && (rightWheelDistance < 0x25) && (rightWheelDistance > 0x19)) {
          crossedStartingLine = " (Crossed Starting Line)";
        }

        //console.log("Message[0x"+msgId.toString(16)+"][Track Event]: ",data,"Left/Right Wheel Distances: "+leftWheelDistance+"/"+rightWheelDistance+" "+trackStyle+crossedStartingLine+" Track Count: "+trackCount[carName]);
        trackCount[carName]=trackCount[carName]+1;

        // Send to OSA
        //var fullUrl = sxServerUrl+"/v6track";
        var fullUrl = dbServerUrl+"/v5_anki/track/";
        var dateTime = new Date().getTime();
        var args = {
          data: {"eventtype": "tracktransition", "groupid":""+groupId,"deviceid":""+devId,"datetime":""+dateTime,"datetimestr":dateFormat.asString(),"carid":address,"carname":displayName,"fromtrackid":fromTrackId,"totrackid":toTrackId,"leftdistcm":leftWheelDistance,"rightdistcm":rightWheelDistance,"lanemm":lanemm,"trackstyle":trackStyle,"trackid":trackCount[carName]},
          headers: { "Content-Type": "application/json" },
          requestConfig: {
              rejectUnauthorized: false,
              timeout: 1000, //request timeout in milliseconds 
              noDelay: true, //Enable/disable the Nagle algorithm 
              keepAlive: true, //Enable/disable keep-alive functionalityidle socket. 
              keepAliveDelay: 1000 //and optionally set the initial delay before the first keepalive probe is sent 
          },
          responseConfig: {
              timeout: 1000 //response timeout 
          }
        }
        var req = client.post(fullUrl, args, function(data,response) { });
        req.on('requestTimeout', function (req) { console.log('request has expired'); req.abort(); });
        req.on('responseTimeout', function (res) { console.log('response has expired'); });
        req.on('error', function (err) { console.log('request error', err); });

        //
        // If there are any listening clients, send the data to them
        //
        var numClients = clientConnection.length;
        var newClientConnection = clientConnection.slice(0);
        for(var i=0;i<numClients;i++) {
          if(clientConnection[i].events === "all" || clientConnection[i].events.indexOf('tracktransition') > -1) {  // This client wants this event
            if(clientConnection[i].cars === "all" || clientConnection[i].cars.indexOf(displayName.toLowerCase()) > -1) { // This client wants this car
              try {
                clientConnection[i].socket.send(JSON.stringify(args.data));
              } catch (ex) {
                console.log("error sending.  Removing client: "+ex);
                newClientConnection.splice(i,1);
              }
            }
          }
        }
        clientConnection=newClientConnection.slice(0);
      }

      else if (msgId == 0x2b) { // ANKI_VEHICLE_MSG_V2C_VEHICLE_DELOCALIZED
        //
        // Send simple off track
        //
        //var fullUrl = sxServerUrl+"/v6offtrack";
        var fullUrl = dbServerUrl+"/v5_anki/offTrack/";
        var dateTime = new Date().getTime();
        var args = {
          data: {"eventtype": "offtrack", "groupid":""+groupId,"deviceid":""+devId,"datetime":""+dateTime,"datetimestr":dateFormat.asString(),"carid":address,"carname":displayName,"eventname":"off track","trackid":trackCount[carName]},
          headers: { "Content-Type": "application/json" },
          requestConfig: {
              rejectUnauthorized: false,
              timeout: 1000, //request timeout in milliseconds 
              noDelay: true, //Enable/disable the Nagle algorithm 
              keepAlive: true, //Enable/disable keep-alive functionalityidle socket. 
              keepAliveDelay: 1000 //and optionally set the initial delay before the first keepalive probe is sent 
          },
          responseConfig: {
              timeout: 1000 //response timeout 
          }
        }
console.log("Sending offtrack to "+fullUrl);
        var req = client.post(fullUrl, args, function(data,response) { });
        req.on('requestTimeout', function (req) { console.log('request has expired'); req.abort(); });
        req.on('responseTimeout', function (res) { console.log('response has expired'); });
        req.on('error', function (err) { console.log('request error', err); });
        var dateTime = new Date().getTime();
        //
        // If there are any listening clients, send the data to them
        //
        var numClients = clientConnection.length;
        var newClientConnection = clientConnection.slice(0);
        for(var i=0;i<numClients;i++) {
          if(clientConnection[i].events === "all" || clientConnection[i].events.indexOf('offtrack') > -1) {  // This client wants this event
            if(clientConnection[i].cars === "all" || clientConnection[i].cars.indexOf(displayName.toLowerCase()) > -1) { // This client wants this car
              try {
                clientConnection[i].socket.send(JSON.stringify(args.data));
              } catch (ex) {
                console.log("error sending.  Removing client: "+ex);
                newClientConnection.splice(i,1);
              }
            }
          }
        }
        clientConnection=newClientConnection.slice(0);
      }

      else if (msgId == 0x2d) { // ANKI_VEHICLE_MSG_V2C_OFFSET_FROM_ROAD_CENTER_UPDATE
        console.log("Message[0x"+msgId.toString(16)+"][Offset From Road Center Update]: ",data);
      }

      else if (msgId == 0x3f) { // ANKI_VEHICLE_MSG_V2C_OFFSET_FROM_ROAD_CENTER_UPDATE
        console.log("Message[0x"+msgId.toString(16)+"][SDK On]: ",data);
        for(var i=0;i<carList.length;i++) {
          if(carList[i].carName == carName || carList[i].address == carName) {
            console.log("Setting sdkOn for car "+carName);
            carList[i].sdkOn=true;
          }
          if(carList[i].carName == carName || carList[i].address == carName) {
            console.log("Setting sdkOn for car "+carName);
            carList[i].sdkOn=true;
          }
        }
      }

      else if (msgId == 0x41) {
        console.log("Message[0x"+msgId.toString(16)+"][???]: ",data);
      }

      else {
        console.log("Message[0x"+msgId.toString(16)+"][???]: ",data);
      }
  },
    "resetLapCounts" : function() {
     console.log("Reset lap counts.");
     for(var i=0;i<carList.length;i++) {
       console.log("Reset lap for car "+carList[i].carName);
       lapNumbers[carList[i].carName] = 0;
       lapNumbers[carList[i].address] = 0;
     }
  }
  };
};
