exports.id = 'oracleankilistcars';
exports.title = 'Oracle/Anki List Cars';
exports.group = 'Oracle/Anki';
exports.color = '#FF6666';
exports.icon = 'list';
exports.output = 1;
exports.input = true;
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.options = { };
exports.cloning = false;

exports.html = `<div class="padding">
</div>
`;


exports.readme = `# Request

This component lists the Anki cars available.

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

    var finalUrl = "http://localhost:7801/getDevices";
    U.request(finalUrl, flags, null, function(err, data, status, headers, host) {
      if (response && !err) {
        response.data = { data: JSON.parse(data), status: status, headers: headers, host: host };
        instance.send2(response);
      } else if (err)
        instance.error(err, response);
    }, cookies, headers);
  };

  instance.reconfigure = function() {
  };

  instance.on('options', instance.reconfigure);
  instance.reconfigure();
};
