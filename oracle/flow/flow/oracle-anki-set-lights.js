exports.id = 'oracleankisetlights';
exports.title = 'Oracle/Anki Set Lights';
exports.group = 'Oracle/Anki';
exports.color = '#FF6666';
exports.icon = 'lightbulb-o';
exports.output = 1;
exports.input = true;
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.options = { carname: "Skull", onoff: true, lightname: "Tail Flash" };
exports.cloning = false;

exports.html = `<div class="padding">
  <div data-jc="dropdown" data-jc-path="carname" data-jc-config="required:true;items:Skull,Thermo,Ground Shock, Guardian,Big Bang,Nuke,Nuke Phantom,Free Wheel,X52,X52 Ice">@(Car Name)</div>
  <div data-jc="togglebutton" data-jc-path="onoff"" data-jc-config="required:false">@(On/Off)</div>
  <div data-jc="dropdown" data-jc-path="lightname" data-jc-config="required:true;items:Head Flash, Tail, Tail Flash">@(Light Name)</div>
</div>
<script>
ON('save.oracleankisetlights', function(component, options) {
  if(component.color == undefined) {
    switch(component.options.carname) {
      case "Skull": component.color = "#FD5134"; break;
      case "Thermo": component.color = "#903427"; break; 
      case "Guardian": component.color = "#23BBC7"; break;
      case "Ground Shock": component.color = "#1C2D7C"; break;
      case "Big Bang": component.color = "#6d7563"; break;
      case "Nuke": component.color = "#9cE667"; break;
      case "Nuke Ice": component.color = "#FDFDFD"; break;
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
- onoff e.g. On
- lightname e.g. Head Flash`;

exports.install = function(instance) {

  var can = false;
  var flags = null;

  instance.on('data', function(response) {
    instance.custom.send(response);
  });

  instance.custom.send = function(response) {
    var options = instance.options;

    var headers = null;
    var flags = [];
    flags.push("post");

    var lightname = instance.options.lightname;
    if(response.repository !== undefined && response.repository.lightname !== undefined) { lightname = response.repository.lightname; }
    var onoff = instance.options.onoff;
    if(response.repository !== undefined && response.repository.onoff !== undefined) {
      onoff = false;
      if(response.repository.onoff.toLowerCase() === "on") { onoff = true; } else { onoff = false; }
    }

    var finalUrl = "http://localhost:7801/";
    if( lightname === "Head Flash" && onoff) { finalUrl = finalUrl + "turnOnHeadlights"; }
    if( lightname === "Head Flash" && !onoff) { finalUrl = finalUrl + "turnOffHeadlights"; }
    if( lightname === "Tail" && onoff) { finalUrl = finalUrl + "turnOnTaillights"; }
    if( lightname === "Tail" && !onoff) { finalUrl = finalUrl + "turnOffTaillights"; }
    if( lightname === "Tail Flash" && onoff) { finalUrl = finalUrl + "flashTaillights"; }
    if( lightname === "Tail Flash" && !onoff) { finalUrl = finalUrl + "turnOffTaillights"; }

    var carname = instance.options.carname;
    if(response.repository !== undefined && response.repository.carname !== undefined) { carname = response.repository.carname; }

    var finalUrl = finalUrl + "/" + carname;
    U.request(finalUrl, flags, null, function(err, data, status, headers, host) {
      if (response && !err) {
        response.data = { data: data, status: status, headers: headers, host: host };
        instance.send2(response);
      } else if (err)
        instance.error(err, response);
    }, null, headers);
  };

  instance.reconfigure = function() {
  };

  instance.on('options', instance.reconfigure);
  instance.reconfigure();
};
