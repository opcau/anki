const ID = 'stopflow';

exports.id = 'stopflow';
exports.title = 'Stop Flow';
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.color = '#656D78';
exports.click = true;
exports.icon = 'stop-circle';
exports.input = 1;
exports.output = 1;
exports.options = { stopflow: true };
exports.readme = `# Stop Flow

This is a gate to allow or stop messages from flowing.`;

exports.html = `<div class="padding">
<label>Initial State: &nbsp;</label>
<div data-jc="togglebutton" data-jc-path="stopflow" data-jc-config="required:false">@(Go/Stop)</div>
</div>`

exports.install = function(instance) {

  var count = 0;

  instance.on('data', function(flowdata) {
    if(instance.options.stopflow) {
      instance.status("Go");
      instance.send2(flowdata);
    } else {
      instance.status("Stop");
      instance.debug("Not sending data.");
    }
  });

  instance.on('click', function() {
    if(instance.options.stopflow) {
      instance.status("Stop");
      instance.options.stopflow = false;
    } else {
      instance.status("Go");
      instance.options.stopflow = true;
    }
  });

  instance.on('options', function() {
  });

};
