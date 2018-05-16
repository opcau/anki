exports.id = 'oracleankisetlane';
exports.title = 'Oracle/Anki Set Lane';
exports.group = 'Oracle/Anki';
exports.color = '#FF2222';
exports.icon = 'road';
exports.output = 1;
exports.input = true;
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.options = { carname: "Skull", lane: 2 };
exports.cloning = false;

exports.html = `<div class="padding">
  <div data-jc="dropdown" data-jc-path="carname" data-jc-config="required:true;items:All,Skull,Thermo,Ground Shock,Guardian,Big Bang,Nuke,Nuke Phantom,Free Wheel,X52,X52 Ice">@(Car Name)</div>
  <hr/>
  <h2>Set lane OR set position value between -64(Left) and +64(Right).  (-24/24 are lanes two and three.)</h2>
  <div data-jc="dropdown" data-jc-path="lane" data-jc-config="required:false;items:Left,Left Middle,Right Middle, Right">@(Lane)</div>
  <div data-jc="textbox" data-jc-path="lanevalue" data-jc-config="required:false;increment:false;type:number;align:center">@(Lane Value)</div>
</div>
<script>
ON('save.oracleankisetlane', function(component, options) {
  if(component.color == undefined) {
    switch(component.options.carname) {
      case "Skull": component.color = "#FD5134"; break;
      case "Thermo": component.color = "#903427"; break; 
      case "Guardian": component.color = "#23BBC7"; break;
      case "Ground Shock": component.color = "#1C2D7C"; break;
      case "Big Bang": component.color = "#6d7563"; break;
      case "Nuke": component.color = "#9cE667"; break;
      case "Nuke Phantom": component.color = "#FDFDFD"; break;
      case "X52": component.color = "#DF2a32"; break;
      case "X52 Ice": component.color = "#F0F0FF"; break;
      case "Free Wheel": component.color = "#A2C84E"; break;
    }
  }
});
</script>`;


exports.readme = `# Request

This component creates a websocket to the given URI and outputs data received.

__Dynamic arguments__:
Are performed via FlowData repository and can be used for URL address. Use \`repository\` component for creating of dynamic arguments. Dynamic values are replaced in the form \`{key}\`:

- carname e.g. Nuke
- lane e.g. Left
- lanevalue e.g. -64`;

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

    var lanevalue = instance.options.lanevalue;
    if(response.repository !== undefined && response.repository.lanevalue !== undefined) { lanevalue = response.repository.lanevalue; }

    if(lanevalue !== undefined) {
      var lane = instance.options.lane;
      if(response.repository !== undefined && response.repository.lane !== undefined) { lane = response.repository.lane; }

      var lanevalue = 0;
      switch(lane) {
        case "Left": lanevalue = -68; break;
        case "Left Middle": lanevalue = -24; break;
        case "Right Middle": lanevalue = 24; break;
        case "Right": lanevalue = 68; break;
        default : lanevalue = 24; break;
      }
    }
    var carname = instance.options.carname;
    if(response.repository !== undefined && response.repository.carname !== undefined) { carname = response.repository.carname; }

    var finalUrl = "http://localhost:7801/changeLanes/"+carname+"/"+lanevalue;
    U.request(finalUrl, flags, null, function(err, data, status, headers, host) {
      if (response && !err) {
        response.data = { data: data, status: status, headers: headers, host: host };
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
