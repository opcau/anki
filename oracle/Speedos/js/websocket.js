var myViewModel;

function getWSUri() {
  var thisHost = decodeURIComponent(window.location.href)
  var l = document.createElement("a");
  l.href = thisHost;
  var uiport = l.port;
  var baseport = uiport.substr(2, 2);
  var uri="ws://" + l.hostname + ":7802";
  console.log("URI: "+uri);
  return uri;
}

function connectSocket(vm) {  
console.log("Connecting....");
  if ('WebSocket' in window){
console.log("Connecting to: "+getWSUri());
    websocket = new WebSocket(getWSUri());
    websocket.onmessage = onMessage;   
    websocket.onerror = onError;
    websocket.onclose = onClose;
    myViewModel = vm;
  } else {
    console.log('websocket not supported...!')
  }
}

//on error event
function onError(evt) {
  console.log('error :' + evt);
  // Reconnnect
  connectSocket(myViewModel);
}

//on close event
function onClose(evt) {
  console.log('websocket closed :' + evt.code + ":" + evt.reason);
  // Reconnnect
  connectSocket(myViewModel);
}

function onMessage(evt) { 
  var data = JSON.parse(evt.data);
console.log("Msg received: "+data.eventtype);
  if(data.eventtype === 'speed') {
    myViewModel.updateSpeed(data.deviceid,data.carid,data.carname,data.speed);
  } else if(data.eventtype === 'offtrack') {
    myViewModel.offtrack(data.deviceid,data.carid,data.carname);
  } else if(data.eventtype === 'lap') {
    myViewModel.lap(data.deviceid,data.datetime,data.carid,data.carname,data.lapnumber,data.laptime,data.trackcount);
  } else if(data.eventtype === 'startrace') {
    myViewModel.startrace(data.deviceid,data.datetime,
      data.carid1,data.carname1,
      data.carid2,data.carname2,
      data.carid3,data.carname3,
      data.carid4,data.carname4);
  }
  //viewModel.updateChart(data);
}
