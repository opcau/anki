const ID = 'count';

exports.id = 'count';
exports.title = 'Count';
exports.version = '1.0.0';
exports.author = 'John Graves';
exports.color = '#656D78';
exports.icon = 'plus-square';
exports.input = 2;
exports.output = 1;
exports.options = { enabled: true, increment: 1, initialvalue: 0 };
exports.readme = `# Counter

Counter Number of times called.`;

exports.html = `<div class="padding">
<div data-jc="textbox" data-jc-path="initialvalue" data-jc-config="placeholder:1;increment:true;type:number;align:center">@(Initial Value)</div>
<div data-jc="textbox" data-jc-path="increment" data-jc-config="placeholder:1;increment:true;type:number;align:center">@(Increment)</div>
</div>`

exports.install = function(instance) {

  var count = 0;

  instance.on('data', function(flowdata) {
    var index = flowdata.index;
    if(index === 0) { // First bubble, increment by value.
      var inc=instance.options.increment;
      count = count+inc;
      instance.status("Count:" + count);
      instance.send2(count);
    } else { // Second bubble, reset counter.
      instance.debug("Reset Count.");
      count = instance.options.initialvalue;
    }
  });

  instance.on('options', function() {
  });

};
