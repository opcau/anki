exports.id = 'oracleankiuturn';
exports.title = 'Oracle/Anki U-Turn';
exports.group = 'Oracle/Anki';
exports.color = '#FF2222';
exports.icon = 'magnet';
exports.output = 1;
exports.input = true;
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.options = { carname: "All" };
exports.cloning = false;

exports.html = `<div class="padding">
  <div data-jc="dropdown" data-jc-path="carname" data-jc-config="required:true;items:All,Skull,Thermo,Ground Shock,Guardian,Big Bang,Nuke,Nuke Phantom,Free Wheel,X52,X52 Ice">@(Car Name)</div>
</div>
<script>
var currentCarName;
ON('save.oracleankiuturn', function(component, options) {
  if(component.name === undefined) {
    component.name = options.carname+": U-Turn";
  } else {
    matchesArray = component.name.match("(.+): U-Turn"); 
    if(matchesArray !== null && matchesArray.length > 0) {
      component.name = options.carname+": U-Turn";
    }
  }
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
  } else {
    if(component.options.carname !== currentCarName) { // car name changed
      if(component.color === "#FD5134" ||
         component.color === "#903427" ||
         component.color === "#23BBC7" ||
         component.color === "#1C2D7C" ||
         component.color === "#6d7563" ||
         component.color === "#9cE667" ||
         component.color === "#FDFDFD" ||
         component.color === "#DF2a32" ||
         component.color === "#F0F0FF" ||
         component.color === "#A2C84E") {
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
    }
  }
});
ON('open.oracleankiuturn', function(component, options) {
  currentCarName = options.carname;
});

</script>`;


exports.readme = `# Request

This component creates a websocket to the given URI and outputs data received.

__Dynamic arguments__:
Are performed via FlowData repository and can be used for URL address. Use \`repository\` component for creating of dynamic arguments. Dynamic values are replaced in the form \`{key}\`:

- carname e.g. Nuke`;

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

    var carname = instance.options.carname;
    if(response.repository !== undefined && response.repository.carname !== undefined) { carname = response.repository.carname; }

    var finalUrl = "http://localhost:7801/turn/uturn/"+carname;
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
