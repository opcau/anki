var MESSAGE_TRIGGER = { type: 'trigger' };
var flowtriggers = {};

function diagonal(x1, y1, x2, y2) {
	return 'M' + x1 + ',' + y1 + 'C' + ((x1 + x2 ) / 2) + ',' + y1 + ' ' + ((x1 + x2) / 2) + ',' + y2 + ' ' + x2 + ',' + y2;
}

function highlightcomponent(id) {

	if (id instanceof jQuery)
		id = id.attrd('id');

	var item = flow.components.findItem('id', id);
	if (!item)
		return false;

	var tab = flow.tabs.findItem('id', item.tab);
	if (!tab)
		return false;

	SETTER('loading', 'show');

	var com;
	var el = $('.designer-scrollbar');
	setTimeout(function() {
		SETTER('loading', 'hide');
		com = $('.node_' + item.id);
		com.aclass('highlight');

		var sx = item.x - (el.width() / 2);
		if (sx < 0)
			sx = 0;

		var sy = item.y - (el.height() / 2);
		if (sy < 0)
			sy = 0;

		el.animate({ scrollTop: sy, scrollLeft: sx });
	}, location.hash.substring(1) === tab.linker ? 100 : 1500);

	location.hash = tab.linker;

	setTimeout(function() {
		com.rclass('highlight');
	}, 8000);

	return true;
}

function markdown(value, el) {
	setTimeout(function(el) {
		$(el || document.body).find('pre code').each(function(i, block) {
			if (!block.$processed) {
				block.$processed = true;
				hljs.highlightBlock(block);
			}
		});
	}, 1, el);
	return marked(value.trim()).replace(/<img/g, '<img class="img-responsive"').replace(/<table/g, '<table class="table table-bordered"').replace(/<a\s/g, '<a target="_blank"');
}

function savescrollposition() {
	if (common.tab) {
		var el = $('.designer-scrollbar');
		var tmp = common.tabscroll['tab' + common.tab.id];
		var pos = { x: el.prop('scrollLeft'), y: el.prop('scrollTop') };
		if (!tmp || (tmp.x !== pos.x && tmp.y !== pos.y))
			SET('common.tabscroll.tab' + common.tab.id, pos);
	}
}

Tangular.register('duration', function(ms) {
	return ms > 999 ? ((ms / 1000).format(1) + ' s') : (ms + ' ms');
});

Tangular.register('trafficsort', function(value, name) {
	var str = '<i class="fa fa-caret-{0}"></i>';
	if (value === name)
		return str.format('up');
	if (value === ('!' + name))
		return str.format('down');
	return '';
});

ON('ready', function() {

	setTimeout(function() {
		SETTER('loading', 'hide');
		$('.ui-loading').rclass('ui-loading-firstload');
	}, 2000);

	EMIT('resize', $(window));
});

$(window).on('resize', function() {
	EMIT('resize', $(window));
});

function getSize(el) {
	var size = SINGLETON('size');
	el = $(el);
	size.width = el.width();
	size.height = el.height();
	return size;
}

function getTranslate(value) {
	if (value instanceof jQuery)
		value = value.attr('transform');
	var arr = value.substring(10, value.length - 1).split(/\s|,/);
	return { x: arr[0].parseInt(), y: arr[1].parseInt() };
}

window.TRIGGER = function(name, data, callback) {

	if (callback === undefined) {
		callback = data;
		data = undefined;
	}

	var id = GUID(15);
	MESSAGE_TRIGGER.name = name;
	MESSAGE_TRIGGER.id = id;
	MESSAGE_TRIGGER.body = data;
	flowtriggers[id] = callback;
	SETTER('websocket', 'send', MESSAGE_TRIGGER);
};

function success() {
	var el = $('#success');
	el.show();
	el.aclass('success-animation');
	setTimeout(function() {
		el.rclass('success-animation');
		setTimeout(function() {
			el.hide();
		}, 1000);
	}, 1500);
	SETTER('loading', 'hide', 500);
}

Number.prototype.filesize = function(decimals, type) {

	if (typeof(decimals) === 'string') {
		var tmp = type;
		type = decimals;
		decimals = tmp;
	}

	var value;

	// this === bytes
	switch (type) {
		case 'bytes':
			value = this;
			break;
		case 'KB':
			value = this / 1024;
			break;
		case 'MB':
			value = filesizehelper(this, 2);
			break;
		case 'GB':
			value = filesizehelper(this, 3);
			break;
		case 'TB':
			value = filesizehelper(this, 4);
			break;
		default:

			type = 'bytes';
			value = this;

			if (value > 1023) {
				value = value / 1024;
				type = 'KB';
			}

			if (value > 1023) {
				value = value / 1024;
				type = 'MB';
			}

			if (value > 1023) {
				value = value / 1024;
				type = 'GB';
			}

			if (value > 1023) {
				value = value / 1024;
				type = 'TB';
			}

			break;
	}

	type = ' ' + type;
	return (decimals === undefined ? value.format(2).replace('.00', '') : value.format(decimals)) + type;
};

function filesizehelper(number, count) {
	while (count--) {
		number = number / 1024;
		if (number.toFixed(3) === '0.000')
			return 0;
	}
	return number;
}

Tangular.register('filesize', function(value, decimals, type) {
	return value ? value.filesize(decimals, type) : '...';
});

Tangular.register('counter', function(value) {
	if (value > 999999)
		return (value / 1000000).format(2) + ' M';
	if (value > 9999)
		return (value / 10000).format(2) + ' K';
	return value ? value.format(0) : 0;
});


function shownotifications(force) {
	var el = $('#panel-notification');
	if (force) {
		var msg = flownotifications.shift();
		if (msg) {
			el.find('div').html(msg);
			setTimeout(function() {
				shownotifications(true);
			}, 3000);
			if (!flownotified) {
				el.aclass('panel-notified');
				flownotified = true;
			}
		} else if (flownotified) {
			el.rclass('panel-notified');
			flownotified = false;
		}
	} else if (!el.hclass('panel-notified'))
		shownotifications(true);
}


function trafficsort(el) {
	var name = el.attrd('name');
	var old = common.trafficsort;

	if (old === name)
		name = '!' + name;
	else if (old === ('!' + name))
		name = '';

	SET('common.trafficsort', name);
}

function refreshTrafficNodes() {
	common.trafficnodes = $('.node_traffic').toArray();
	for (var i = 0; i < common.trafficnodes.length; i++) {
		common.trafficnodes[i] = $(common.trafficnodes[i]);
		var el = common.trafficnodes[i];
		var item = el.get(0);
		item.$io = el.find('.traffic');
		item.$duration = el.find('.duration');
		if (!item.$duration.length)
			item.$duration = null;
		item.$pending = el.find('.pending');
	}
}

function refreshTraffic() {

	if (!common.traffic || !common.trafficnodes)
		return;

	var count = common.traffic.count;
	var key;
	var animate = [];

	for (var i = 0, length = common.trafficnodes.length; i < length; i++) {

		var el = common.trafficnodes[i];
		var id = el.attrd('id');
		var stats = common.traffic[id];
		var input = 0;
		var output = 0;
		var inputc = 0;
		var outputc = 0;
		var pending = 0;
		var duration = 0;
		var ci = 0;
		var co = 0;

		if (stats) {

			if (stats.input || stats.output) {
				input = ((stats.input / count) * 100 >> 0);
				output = ((stats.output / count) * 100 >> 0);
				inputc = stats.input;
				outputc = stats.output;
			}

			ci = stats.ci;
			co = stats.co;
			duration = stats.duration;
			pending = stats.pending;

			// analyze
			if (stats.ni && common.animations) {
				var keys = Object.keys(flow.connections);
				for (var j = 0, jl = keys.length; j < jl; j++) {
					key = keys[j];
					if (key.substring(key.length - id.length) === id) {
						var subid = key.substring(0, key.indexOf('#', id.length));
						var tmpout = common.traffic[subid];
						if (tmpout && tmpout.no)
							animate.push({ id: 'id' + subid + id, com: id, parent: subid, count: tmpout.no });
					}
				}
			}
		}

		var key = inputc + 'x' + outputc + 'x' + pending + 'x' + duration;
		var item = el.get(0);

		if (key === item.$traffic)
			continue;

		item.$traffic = key;
		var sum = input > output ? input : output;
		el.tclass('m1', sum < 25).tclass('m2', sum > 24 && sum < 50).tclass('m3', sum > 49 && sum < 70).tclass('m4', sum > 69);
		item.$io.html('<title>' + (ci.format(0)) + ' / ' + (co.format(0)) + '</title>IO: <tspan>' + inputc + '</tspan> &#8644; <tspan>' + outputc + '</tspan>');
		item.$duration && item.$duration.html('&empty; ' + Thelpers.duration(duration || 0));
		var pel = item.$pending.tclass('hide', pending ? false : true);
		pending && pel.html(pending ? ('&#10711; ' + pending) : '');
	}

	if (common.animations && !common.form) {
		for (var i = 0; i < animate.length; i++) {

			var item = animate[i];
			var sleep = 0;

			if (item.parent) {
				var tmp = item;
				while (true) {
					tmp = animate.findItem('com', tmp.parent);
					if (!tmp)
						break;
					sleep += 500;
				}
			}

			setTimeout(function(item) {
				SETTER('designer', 'newdata', item.id, item.count);
			}, sleep, item);
		}
	}
}

function themechanger() {
	SETTER('loading', 'show');
	setTimeout(function() {
		SET('common.theme', common.theme === 'dark' ? '' : 'dark');
		SETTER('loading', 'hide', 1000);
		var color = common.theme === 'dark' ? 'white' : 'black';
		$('.input,.output').each(function() {
			var el = $(this);
			var cur = el.attr('fill');
			cur !== color && el.attr('fill', el.attrd('index') === '99' ? 'red' : color);
		});
		$('.consumption').each(function() {
			this.setAttribute('fill', common.theme === 'dark' ? '#505050' : '#E0E0E0');
		});
		refreshTraffic();
	}, 1000);
}

SETTER(true, 'shortcuts', 'register', 'esc', function(e) {
	if (common.form2) {
		SET('common.form2', '');
		e.preventDefault();
		e.stopPropagation();
	} else if (common.form) {
		SET('common.form', '');
		e.preventDefault();
		e.stopPropagation();
	}
});
