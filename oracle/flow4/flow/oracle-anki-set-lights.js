exports.id = 'oracleankisetlights';
exports.title = 'Oracle/Anki Set Lights';
exports.group = 'Oracle/Anki';
exports.color = '#FF6666';
exports.icon = 'lightbulb-o';
exports.output = 1;
exports.input = true;
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.options = { carname: "All", onoff: true, lightname: "Tail Flash" };
exports.cloning = false;

exports.html = `<div class="padding">
  <div data-jc="dropdown" data-jc-path="carname" data-jc-config="required:true;items:All,Skull,Thermo,Ground Shock, Guardian,Big Bang,Nuke,Nuke Phantom,Free Wheel,X52,X52 Ice,Ice Charger,MXT">@(Car Name)</div>
  <div data-jc="togglebutton" data-jc-path="onoff"" data-jc-config="required:false">@(On/Off)</div>
  <div data-jc="dropdown" data-jc-path="lightname" data-jc-config="required:true;items:Head Flash, Tail, Tail Flash">@(Light Name)</div>
</div>
<script>
var currentCarName;
ON('save.oracleankisetlights', function(component, options) {
  if(component.name === undefined) {
    if(options.onoff) {
      component.name = options.carname+": "+options.lightname+" On";
    } else {
      component.name = options.carname+": "+options.lightname+" Off";
    }
  } else {
    matchesArray = component.name.match("(.+): (.+) On"); 
    if(matchesArray !== null && matchesArray.length > 0) {
      if(options.onoff) {
        component.name = options.carname+": "+options.lightname+" On";
      } else {
        component.name = options.carname+": "+options.lightname+" Off";
      }
    }
    matchesArray = component.name.match("(.+): (.+) Off"); 
    if(matchesArray !== null && matchesArray.length > 0) {
      if(options.onoff) {
        component.name = options.carname+": "+options.lightname+" On";
      } else {
        component.name = options.carname+": "+options.lightname+" Off";
      }
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
ON('open.oracleankisetlights', function(component, options) {
  currentCarName = options.carname;
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
        instance.status(carname + ":" + lightname + " " + onoff);
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
