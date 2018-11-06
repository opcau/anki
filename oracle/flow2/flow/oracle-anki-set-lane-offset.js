exports.id = 'oracleankisetlaneoffset';
exports.title = 'Oracle/Anki Set Lane Offset';
exports.group = 'Oracle/Anki';
exports.color = '#FF2222';
exports.icon = 'road';
exports.output = 1;
exports.input = true;
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.options = { carname: "All", offset: "Left" };
exports.cloning = false;

exports.html = `<div class="padding">
  <div data-jc="dropdown" data-jc-path="carname" data-jc-config="required:true;items:All,Skull,Thermo,Ground Shock,Guardian,Big Bang,Nuke,Nuke Phantom,Free Wheel,X52,X52 Ice,Ice Charger,MXT">@(Car Name)</div>
  <hr/>
  <h3>Set current lane OR position value between -64(Left) and +64(Right).  (-24/24 are lanes two and three.)</h3>
  <div data-jc="dropdown" data-jc-path="offset" data-jc-config="required:false;items:Left,Left Middle,Right Middle, Right">@(Lane)</div>
  <div data-jc="textbox" data-jc-path="offsetvalue" data-jc-config="required:false;increment:false;type:number;align:center">@(Lane Value)</div>
</div>
<script>
var currentCarName;
ON('save.oracleankisetlaneoffset', function(component, options) {
  if(component.name === undefined) {
    component.name = options.carname+": "+options.offset + " Lane";
  } else {
    matchesArray = component.name.match("(.+): (.+) Lane"); 
    if(matchesArray !== null && matchesArray.length > 0) {
      component.name = options.carname+": "+options.offset + " Lane";
    }
  }
  if(component.color === undefined) {
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
          case "MXT": component.color = "#0000DF"; break;
        }
      }
    }
  }
});
ON('open.oracleankisetlaneoffset', function(component, options) {
  currentCarName = options.carname;
});

</script>`;


exports.readme = `# Request

This component creates a websocket to the given URI and outputs data received.

__Dynamic arguments__:
Are performed via FlowData repository and can be used for URL address. Use \`repository\` component for creating of dynamic arguments. Dynamic values are replaced in the form \`{key}\`:

- carname e.g. Nuke
- offset e.g. Left
- offsetvalue e.g. -64`;

exports.install = function(instance) {

  var can = false;
  var flags = null;
  var cookies2 = null;

  instance.on('data', function(response) {
    instance.custom.send(response);
  });

  instance.custom.send = function(response) {
    var options = instance.options;

    var headers = null;
    var cookies = null;
    var flags = [];
    flags.push("post");

    var offsetvalue = instance.options.offsetvalue;
    if(response.repository !== undefined && response.repository.offsetvalue !== undefined) { offsetvalue = response.repository.offsetvalue; }

    if(offsetvalue === undefined) {
      var lane = instance.options.lane;
      if(response.repository !== undefined && response.repository.lane !== undefined) { lane = response.repository.lane; }

      var offsetvalue = 0;
      switch(lane.toLowerCase()) {
        case "left": offsetvalue = -68; break;
        case "left middle": offsetvalue = -24; break;
        case "right middle": offsetvalue = 24; break;
        case "right": offsetvalue = 68; break;
        default : offsetvalue = 24; break;
      }
    }
    if(offsetvalue > 64) { offsetvalue = 64; }
    if(offsetvalue < -64) { offsetvalue = -64; }
    var carname = instance.options.carname;
    if(response.repository !== undefined && response.repository.carname !== undefined) { carname = response.repository.carname; }

    var finalUrl = "http://localhost:7801/setLaneOffset/"+carname+"/"+offsetvalue;
    instance.status(carname+": "+offsetvalue);
    U.request(finalUrl, flags, null, function(err, data, status, headers, host) {
      if (response && !err) {
        response.data = { data: data, status: status, headers: headers, host: host };
        instance.status(carname + ": "+lane );
        instance.send2(response);
      } else if (err)
        instance.error(err, response);
    }, cookies || cookies2, headers);
  };

  instance.reconfigure = function() {
  };

  instance.on('options', instance.reconfigure);
  instance.reconfigure();
};
