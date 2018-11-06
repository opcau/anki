exports.id = 'oracleankisetspeed';
exports.title = 'Oracle/Anki Set Speed';
exports.group = 'Oracle/Anki';
exports.color = '#FF2222';
exports.icon = 'dashboard';
exports.output = 1;
exports.input = true;
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.options = { carname: "All", speed: 500, speedupdates: false };
exports.cloning = false;

exports.html = `<div class="padding">
  <div data-jc="dropdown" data-jc-path="carname" data-jc-config="required:true;items:All,Skull,Thermo,Ground Shock,Guardian,Big Bang,Nuke,Nuke Phantom,Free Wheel,X52,X52 Ice,Ice Charger,MXT">@(Car Name)</div>
  <hr/>
  <section class="m">
    <label>Speed</label>
        <div data-jc="range" data-jc-path="speed" data-jc-config="min:0;max:1300">
          <center><h2><b><div data-bind="?.speed__html:value"></div></b></h2></center>
        <div>
  </section>
  <div data-jc="checkbox" data-jc-path="speedupdates">@(Allow Speed Updates (Second input))</div>
</div>
<script>
var currentCarName;
ON('save.oracleankisetspeed', function(component, options) {
  if(component.name === undefined) {
    component.name = options.carname+": "+" Speed "+options.speed;
  } else {
    // If the title wasn't manually set (using default), update if things changed.
    matchesArray = component.name.match("(.+):  Speed (.+)");
    if(matchesArray !== null && matchesArray.length > 0) {
      component.name = options.carname+": "+" Speed "+options.speed;
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
      case "MXT": component.color = "#D0D0DF"; break;
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
  if(component.options.speedupdates) {
    component.input = 2; // Add input to update speed.
  }
});

ON('open.oracleankisetspeed', function(component, options) {
  currentCarName = options.carname;
});
</script>`;


exports.readme = `# Request

This component calls the Oracle/Anki server and sets the speed of a given car.
__Dynamic arguments__:
Are performed via FlowData repository and can be used for URL address. Use \`repository\` component for creating of dynamic arguments. Dynamic values are replaced in the form \`{key}\`:

- carname e.g. Nuke;
- speed e.g. 600`;

exports.install = function(instance) {

  var can = false;
  var flags = null;
  var cookies2 = null;

  instance.on('data', function(flowdata) {
    var index = flowdata.index;
    if(index === 0) { // First bubble
      instance.custom.send(flowdata);
    } else { // Second bubble - Update speed only
      instance.custom.changespeed(flowdata);
    }
  });

  instance.custom.send = function(flowdata) {
    var options = instance.options;

    var headers = null;
    var cookies = null;
    var flags = [];
    flags.push("post");


    instance.carname = instance.options.carname;
    if(flowdata.repository !== undefined && flowdata.repository.carname !== undefined) { instance.carname = flowdata.repository.carname; } else { flowdata.repository.carname = instance.carname; }
    var speed = instance.options.speed;
    if(flowdata.repository !== undefined && flowdata.repository.speed !== undefined) { speed = flowdata.repository.speed; }


    var finalUrl = "http://localhost:7801/setSpeed/"+instance.carname+"/"+speed;
    U.request(finalUrl, flags, null, function(err, data, status, headers, host) {
      if (flowdata && !err) {
        flowdata.data = { data: data, status: status, headers: headers, host: host };
        instance.status(instance.carname + ":" + speed);
        instance.send2(flowdata);
      } else if (err)
        instance.status("Error");
        if(err !== null) {
          instance.error(err);
        }
    }, cookies || cookies2, headers);
  };

  instance.custom.changespeed = function(flowdata) {
    var newspeed = flowdata.data;
    var options = instance.options;

    var headers = null;
    var cookies = null;
    var flags = [];
    flags.push("post");

    var speed = flowdata.data
    if(flowdata.repository !== undefined && flowdata.repository.speed !== undefined) { speed = flowdata.repository.speed; }

    var finalUrl = "http://localhost:7801/setSpeed/"+instance.carname+"/"+speed;
    U.request(finalUrl, flags, null, function(err, data, status, headers, host) {
      if (flowdata && !err) {
        flowdata.data = { data: data, status: status, headers: headers, host: host };
        instance.status(instance.carname + ":" + speed);
        instance.send2(flowdata);
      } else if (err != null)
        instance.status("Error");
        instance.error(err.message);
    }, cookies || cookies2, headers);
  };

  instance.reconfigure = function() {
instance.options.ccc = 50;
  };

  instance.on('options', instance.reconfigure);
  instance.reconfigure();
};
