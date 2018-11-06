exports.id = 'oracleankievents';
exports.title = 'Oracle/Anki Event Listener';
exports.group = 'Oracle/Anki';
exports.color = '#FF4444';
exports.icon = 'bullhorn';
exports.output = 1;
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.options = { };
exports.cloning = false;
exports.npm = [ 'html5-websocket' ];

exports.html = `<div class="padding">
  <div class="row ">
  <div class="col-md-6 m">
  <section class="m">
    <label>Cars to monitor</label>
      <div class="padding">
        <div data-jc="checkbox" data-jc-path="AllCars">@(All)</div>
        <div data-jc="checkbox" data-jc-path="Skull">@(Skull)</div>
        <div data-jc="checkbox" data-jc-path="Thermo">@(Thermo)</div>
        <div data-jc="checkbox" data-jc-path="GroundShock">@(Ground Shock)</div>
        <div data-jc="checkbox" data-jc-path="Guardian">@(Guardian)</div>
        <div data-jc="checkbox" data-jc-path="BigBang">@(Big Bang)</div>
        <div data-jc="checkbox" data-jc-path="Nuke">@(Nuke)</div>
        <div data-jc="checkbox" data-jc-path="NukePhantom">@(Nuke Phantom)</div>
        <div data-jc="checkbox" data-jc-path="FreeWheel">@(Free Wheel)</div>
        <div data-jc="checkbox" data-jc-path="X52">@(X52)</div>
        <div data-jc="checkbox" data-jc-path="X52Ice">@(X52 Ice)</div>
        <div data-jc="checkbox" data-jc-path="IceCharger">@(Ice Charger)</div>
        <div data-jc="checkbox" data-jc-path="MXT">@(MXT)</div>
      </div>
  </section>
  </div>
  <div class="col-md-6 m">
  <section>
    <label>Events</label>
      <div class="padding">
        <div data-jc="checkbox" data-jc-path="AllEvents">@(All)</div>
        <div data-jc="checkbox" data-jc-path="Speed">@(Speed)</div>
        <div data-jc="checkbox" data-jc-path="TrackTransition">@(Track Transition)</div>
        <div data-jc="checkbox" data-jc-path="OffTrack">@(Off Track)</div>
        <div data-jc="checkbox" data-jc-path="Battery">@(Battery)</div>
        <div data-jc="checkbox" data-jc-path="Lap">@(Lap)</div>
      </div>
  </section>
  </div>
  </div>
</div>
<script>
var currentCarName;
ON('save.oracleankievents', function(component, options) {
  if(component.name === undefined) {
    component.name = "Events";
  }
  if(component.color == undefined) {
    switch(component.options.carname) {
      case "Skull": component.color = "#FD5134"; break;
      case "Thermo": component.color = "#903427"; break; 
      case "Guardian": component.color = "#23BBC7"; break;
      case "Ground Shock": component.color = "#1C2D7C"; break;
      case "Big Bang": component.color = "#6d7563"; break;
      case "Nuke": component.color = "#9cE667"; break;
      case "Nuke Phantom": component.color = "#DDDDDD"; break;
      case "X52": component.color = "#DF2a32"; break;
      case "X52 Ice": component.color = "#D0D0DF"; break;
      case "Free Wheel": component.color = "#A2C84E"; break;
      case "Ice Charger": component.color = "#D0D0DF"; break;
      case "MXT": component.color = "#0000DF"; break;
    }
  } else {
    if(component.options.carname !== currentCarName) { // car name changed
      if(component.color === "#FD5134" ||
         component.color === "#903427" ||
         component.color === "#23BBC7" ||
         component.color === "#1C2D7C" ||
         component.color === "#6d7563" ||
         component.color === "#9cE667" ||
         component.color === "#DDDDDD" ||
         component.color === "#DF2a32" ||
         component.color === "#D0D0DF" ||
         component.color === "#0000DF" ||
         component.color === "#A2C84E") {
        switch(component.options.carname) {
          case "Skull": component.color = "#FD5134"; break;
          case "Thermo": component.color = "#903427"; break;
          case "Guardian": component.color = "#23BBC7"; break;
          case "Ground Shock": component.color = "#1C2D7C"; break;
          case "Big Bang": component.color = "#6d7563"; break;
          case "Nuke": component.color = "#9cE667"; break;
          case "Nuke Phantom": component.color = "#DDDDDD"; break;
          case "X52": component.color = "#DF2a32"; break;
          case "X52 Ice": component.color = "#D0D0DF"; break;
          case "Free Wheel": component.color = "#A2C84E"; break;
          case "Ice Charger": component.color = "#D0D0DF"; break;
          case "MXT": component.color = "#0000FD"; break;
        }
      }
    }
  }
});
ON('open.oracleankievents', function(component, options) {
  currentCarName = options.carname;
});
</script>`;


exports.readme = `# Request

This component creates a websocket to the oracle-anki server and processes events based on the given filters.

__Filters__:

- cars: Which cars to listen for events.
- events: Which events to listen to. `;

exports.install = function(instance) {

  instance.reconfigure = function() {
    socketUrl = "localhost:7802";
    socketUrl = "ws://"+socketUrl;

    // Get car list
    var carlist = instance.options.AllCars;
    if( carlist === undefined  || carlist === false ) {
      carlist = "";
      if( instance.options.Skull ) { carlist = carlist + ",Skull"; }
      if( instance.options.Thermo ) { carlist = carlist + ",Thermo"; }
      if( instance.options.GroundShock ) { carlist = carlist + ",Ground Shock"; }
      if( instance.options.Guardian ) { carlist = carlist + ",Guardian"; }
      if( instance.options.BigBang ) { carlist = carlist + ",Big Bang"; }
      if( instance.options.Nuke ) { carlist = carlist + ",Nuke"; }
      if( instance.options.NukePhantom ) { carlist = carlist + ",Nuke Phantom"; }
      if( instance.options.FreeWheel ) { carlist = carlist + ",Free Wheel"; }
      if( instance.options.X52 ) { carlist = carlist + ",X52"; }
      if( instance.options.X52Ice ) { carlist = carlist + ",X52 Ice"; }
      if( instance.options.MXT ) { carlist = carlist + ",MXT"; }
      if( instance.options.IceCharger ) { carlist = carlist + ",Ice Charger"; }
      if( carlist.length > 0) { carlist = carlist.substring(1); }
    } else {
      carlist = "All";
    }
    socketUrl = socketUrl + "?cars="+carlist;
    // Get event list
    var eventlist = instance.options.AllEvents;
    if( eventlist === undefined  || eventlist === false ) {
      eventlist = "";
      if( instance.options.Speed ) { eventlist = eventlist + ",Speed"; }
      if( instance.options.TrackTransition ) { eventlist = eventlist + ",TrackTransition"; }
      if( instance.options.OffTrack ) { eventlist = eventlist + ",OffTrack"; }
      if( instance.options.Battery ) { eventlist = eventlist + ",Battery"; }
      if( instance.options.Lap ) { eventlist = eventlist + ",Lap"; }
      if( eventlist.length > 0) { eventlist = eventlist.substring(1); }
    } else {
      eventlist = "All";
    }
    socketUrl = socketUrl + "&events="+eventlist;
    instance.status("Listening");

    const WebSocket = require('html5-websocket');
    const ReconnectingWebSocket = require('reconnecting-websocket');
    instance.debug("WebSocket: Connect to: "+socketUrl);
    instance.websocket = new ReconnectingWebSocket(socketUrl,[],{ constructor: WebSocket });
    instance.websocket.onmessage = function(evt) {
      var jsondata = JSON.parse(evt.data);
      instance.status("Event: "+jsondata.carname+"-"+jsondata.eventtype);
      instance.send2(jsondata);
    };
  };

  instance.on('close', function() {
    instance.websocket.close(code=1000, reason='Instance closed', {keepClosed: true})
  });

  instance.on('options', function() {
    if(instance.websocket !== undefined) {
      instance.websocket.close(code=1000, reason='Reconfigure', {keepClosed: true})
    }
    instance.reconfigure();
  });
  instance.reconfigure();
};

