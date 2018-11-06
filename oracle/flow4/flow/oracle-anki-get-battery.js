exports.id = 'oracleankigetbattery';
exports.title = 'Oracle/Anki Get Battery';
exports.group = 'Oracle/Anki';
exports.color = '#FF6666';
exports.icon = 'battery';
exports.output = 1;
exports.input = true;
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.options = { };
exports.cloning = false;

exports.html = `<div class="padding">
  <div data-jc="dropdown" data-jc-path="carname" data-jc-config="required:true;items:Skull,Thermo,Ground Shock,Guardian,Big Bang,Nuke,Nuke Phantom,Free Wheel,X52,X52 Ice,Ice Charger,MXT">@(Car Name)</di
v>

</div>
`;


exports.readme = `# Request

This component returns a car's battery level.

`;

exports.install = function(instance) {


  instance.on('data', function(response) {
    instance.custom.send(response);
  });

  instance.custom.send = function(response) {
    var options = instance.options;

    var headers = null;
    var cookies = null;
    var flags = [];
    flags.push("get");

    var carname = instance.options.carname;
    if(response.repository !== undefined && response.repository.carname !== undefined) { carname = response.repository.carname; }

    var finalUrl = "http://localhost:7801/batteryLevel/"+carname;
console.log("Final URL: "+finalUrl);
    U.request(finalUrl, flags, null, function(err, data, status, headers, host) {
      if (response && !err) {
        response.data = { data: JSON.parse(data), status: status, headers: headers, host: host };
        instance.status(carname + ":" + JSON.parse(data).battery);
        instance.send2(response);
      } else if (err) {
var util = require('util');
console.log("finalresponse: "+util.inspect(response));
console.log("Error: "+util.inspect(err));
        instance.error(err, response);
      }
    }, cookies, headers);
  };

  instance.reconfigure = function() {
  };

  instance.on('options', instance.reconfigure);
  instance.reconfigure();
};
