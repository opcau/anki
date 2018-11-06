exports.id = 'oracleankisetenginelight';
exports.title = 'Oracle/Anki Set Engine Light';
exports.group = 'Oracle/Anki';
exports.color = '#FF6666';
exports.icon = 'lightbulb-o';
exports.output = 1;
//exports.input = true;
exports.input = 1;
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.options = { carname: "All" };
exports.cloning = false;
exports.npm = [ 'colornames' ];

exports.html = `<div class="padding">
  <div data-jc="dropdown" data-jc-path="carname" data-jc-config="required:true;items:All,Skull,Thermo,Ground Shock,Guardian,Big Bang,Nuke,Nuke Phantom,Free Wheel,X52,X52 Ice,Ice Charger,MXT">@(Car Name)</div>
  <div data-jc="colorselector" data-jc-path="colour">@(Colour)</div>
</div>

<script>
var currentCarName;

ON('save.oracleankisetenginelight', function(component, options) {
  if(component.name === undefined) {
    component.name = options.carname+": Engine Light";
  } else {
    matchesArray = component.name.match("(.+): Engine Light"); 
    if(matchesArray !== null && matchesArray.length > 0) {
      component.name = options.carname+": Engine Light";
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
ON('open.oracleankisetenginelight', function(component, options) {
  currentCarName = options.carname;
});
</script>`;


exports.readme = `# Request

This component creates a websocket to the given URI and outputs data received.

__Dynamic arguments__:
Are performed via FlowData repository and can be used for URL address. Use \`repository\` component for creating of dynamic arguments. Dynamic values are replaced in the form \`{key}\`:

- carname e.g. Nuke
- colour e.g. #FFDDAA`;

exports.install = function(instance) {

  var can = false;
  var flags = null;
  var cookies2 = null;

  instance.on('data', function(response) {
    instance.custom.send(response);
  });

  instance.custom.hexToRgb = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var util = require('util');
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

  instance.custom.send = function(response) {
    var options = instance.options;

    var headers = null;
    var cookies = null;
    var flags = [];
    flags.push("post");

    var colour = instance.options.colour;
    if(response.repository !== undefined && response.repository.colour !== undefined) { colour = response.repository.colour; }
    var colourName = colour;

    if( colour === "#DA4453") { colour = "#FF0000"; colourName = "Red"; } // Red
    if( colour === "#FFA500") { colour = "#FFA500"; colourName = "Orange"; } // Orange
    if( colour === "#F6BB42") { colour = "#FFFF00"; colourName = "Yellow"; } // Yellow
    if( colour === "#8CC152") { colour = "#00FF00"; colourName = "Green"; } // Green
    if( colour === "#4A89DC") { colour = "#0000FF"; colourName = "Blue"; } // Blue
    if( colour === "#967ADC") { colour = "#A020F0"; colourName = "Purple"; } // Purple
    if( colour === "#656D7D") { colour = "#555555"; colourName = "Grey"; } // Grey

    if( colour.substr(0,1) !== "#") {
      var toHex = require('colornames')
      colour = toHex(colour);
    }
    if(colour === undefined) {
      colour = "#FFFFFF";
    }

    var rgb = instance.custom.hexToRgb(colour.toLowerCase());
    var red = Math.floor(rgb.r/16);
    var green = Math.floor(rgb.g/16);
    var blue = Math.floor(rgb.b/16);

    var carname = instance.options.carname;
    if(response.repository !== undefined && response.repository.carname !== undefined) { carname = response.repository.carname; }

    var finalUrl = "http://localhost:7801/setEngineLight/"+carname+"/"+red+"/"+green+"/"+blue;
    U.request(finalUrl, flags, null, function(err, data, status, headers, host) {
      if (response && !err) {
        response.data = { data: data, status: status, headers: headers, host: host };
        instance.status(carname + ":" + colourName );
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
