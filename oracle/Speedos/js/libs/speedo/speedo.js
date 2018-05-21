/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['d3'], function (d3) {
    var vis;
    var config;
    function valueToDegrees(config, value)
    {
        return value / config.range * 270 - (config.min / config.range * 270 + 45);
    }

    function valueToRadians(config, value)
    {
        return valueToDegrees(config, value) * Math.PI / 180;
    }

    function valueToPoint(config, value, factor)
    {
        return {x: config.cx - config.raduis * factor * Math.cos(valueToRadians(config, value)),
            y: config.cy - config.raduis * factor * Math.sin(valueToRadians(config, value))
        };
    }
    function buildPointerPath(config, value)
    {
        var delta = config.range / 13;

        var head = xvalueToPoint(config, value, 0.85);
        var head1 = xvalueToPoint(config, value - delta, 0.12);
        var head2 = xvalueToPoint(config, value + delta, 0.12);

        var tailValue = value - (config.range * (1 / (270 / 360)) / 2);
        var tail = xvalueToPoint(config, tailValue, 0.28);
        var tail1 = xvalueToPoint(config, tailValue - delta, 0.12);
        var tail2 = xvalueToPoint(config, tailValue + delta, 0.12);

        return [head, head1, tail2, tail, tail1, head2, head];

        function xvalueToPoint(config, value, factor)
        {
            var point = valueToPoint(config, value, factor);
            point.x -= config.cx;
            point.y -= config.cy;
            return point;
        }
    }
    function drawBand(vis, config, start, end, color)
    {
        if (0 >= end - start)
            return;
        vis.append("svg:path")
                .style("fill", color)
                .attr("d", d3.svg.arc()
                        .startAngle(valueToRadians(config, start))
                        .endAngle(valueToRadians(config, end))
                        .innerRadius(0.65 * config.raduis)
                        .outerRadius(0.85 * config.raduis))
                .attr("transform", function () {
                    return "translate(" + config.cx + ", " + config.cy + ") rotate(270)"
                });
    }
    var updateFn = function (vis,value, transitionDuration) {
        console.log('update');
        var pointerContainer = vis.select(".pointerContainer");

        pointerContainer.selectAll("text").text(Math.round(value));

        var pointer = pointerContainer.selectAll("path");
        pointer.transition()
                .duration(undefined != transitionDuration ? transitionDuration : config.transitionDuration)
                //.delay(0)
                //.ease("linear")
                //.attr("transform", function(d) 
                .attrTween("transform", function ()
                {
                    var pointerValue = value;
                    if (value > config.max)
                        pointerValue = config.max + 0.02 * config.range;
                    else if (value < config.min)
                        pointerValue = config.min - 0.02 * config.range;
                    var targetRotation = (valueToDegrees(config, pointerValue) - 90);
                    var currentRotation = targetRotation;

                    return function (step)
                    {
                        var rotation = currentRotation + (targetRotation - currentRotation) * step;
                        return "translate(" + config.cx + ", " + config.cy + ") rotate(" + rotation + ")";
                    }
                });
    }
    console.log("here in define function.");
    return {
        init: function (element, label) {
            console.log('init');
            console.log("init");
            vis = d3.select('#' + element.id).append('svg:svg')
                    .attr('width', 500)
                    .attr('height', 500)
                    .attr('class', 'viz')
                    .append('svg:g');
            config = {
                size: 220,
                label: label,
                min: 0,
                max: 100,
            }
            config.range = config.max - config.min;
            config.greenZones = [{from: config.min + config.range * 0.0, to: config.min + config.range * 0.65}];
            config.yellowZones = [{from: config.min + config.range * 0.65, to: config.min + config.range * 0.9}];
            config.redZones = [{from: config.min + config.range * 0.9, to: config.max}];
            config.size = config.size * 0.9;
            config.raduis = config.size * 0.97 / 2;
            config.cx = config.size / 2;
            config.cy = config.size / 2;
            config.majorTicks = 5;
            config.minorTicks = 2;
            config.greenColor = "#109618";
            config.yellowColor = "#FF9900";
            config.redColor = "#DC3912";
            config.transitionDuration = 500;

            /*vis.append("svg:svg")
             .attr("class", "gauge")
             .attr("width", config.size)
             .attr("height", config.size);*/

            vis.append("svg:circle")
                    .attr("cx", config.cx)
                    .attr("cy", config.cy)
                    .attr("r", config.raduis)
                    .style("fill", "#ccc")
                    .style("stroke", "#000")
                    .style("stroke-width", "0.5px");

            vis.append("svg:circle")
                    .attr("cx", config.cx)
                    .attr("cy", config.cy)
                    .attr("r", 0.9 * config.raduis)
                    .style("fill", "#fff")
                    .style("stroke", "#e0e0e0")
                    .style("stroke-width", "2px");

            for (var index in config.greenZones)
            {
                drawBand(vis, config, config.greenZones[index].from, config.greenZones[index].to, config.greenColor);
            }

            for (var index in config.yellowZones)
            {
                drawBand(vis, config, config.yellowZones[index].from, config.yellowZones[index].to, config.yellowColor);
            }

            for (var index in config.redZones)
            {
                drawBand(vis, config, config.redZones[index].from, config.redZones[index].to, config.redColor);
            }

            var fontSize = Math.round(config.size / 9);
            vis.append("svg:text")
                    .attr("x", config.cx)
                    .attr("y", config.cy / 2 + fontSize / 2)
                    .attr("dy", fontSize / 2)
                    .attr("text-anchor", "middle")
                    .text(config.label)
                    .style("font-size", fontSize + "px")
                    .style("fill", "#333")
                    .style("stroke-width", "0px");

            var fontSize = Math.round(config.size / 16);
            var majorDelta = config.range / (config.majorTicks - 1);
            for (var major = config.min; major <= config.max; major += majorDelta)
            {
                var minorDelta = majorDelta / config.minorTicks;
                for (var minor = major + minorDelta; minor < Math.min(major + majorDelta, config.max); minor += minorDelta)
                {
                    var point1 = valueToPoint(config, minor, 0.75);
                    var point2 = valueToPoint(config, minor, 0.85);

                    vis.append("svg:line")
                            .attr("x1", point1.x)
                            .attr("y1", point1.y)
                            .attr("x2", point2.x)
                            .attr("y2", point2.y)
                            .style("stroke", "#666")
                            .style("stroke-width", "1px");
                }

                var point1 = valueToPoint(config, major, 0.7);
                var point2 = valueToPoint(config, major, 0.85);

                vis.append("svg:line")
                        .attr("x1", point1.x)
                        .attr("y1", point1.y)
                        .attr("x2", point2.x)
                        .attr("y2", point2.y)
                        .style("stroke", "#333")
                        .style("stroke-width", "2px");

                if (major == config.min || major == config.max)
                {
                    var point = valueToPoint(config, major, 0.63);

                    vis.append("svg:text")
                            .attr("x", point.x)
                            .attr("y", point.y)
                            .attr("dy", fontSize / 3)
                            .attr("text-anchor", major == config.min ? "start" : "end")
                            .text(major)
                            .style("font-size", fontSize + "px")
                            .style("fill", "#333")
                            .style("stroke-width", "0px");
                }
            }

            var pointerContainer = vis.append("svg:g").attr("class", "pointerContainer");

            var midValue = (config.min + config.max) / 2;

            var pointerPath = buildPointerPath(config, midValue);

            var pointerLine = d3.svg.line()
                    .x(function (d) {
                        return d.x
                    })
                    .y(function (d) {
                        return d.y
                    })
                    .interpolate("basis");

            pointerContainer.selectAll("path")
                    .data([pointerPath])
                    .enter()
                    .append("svg:path")
                    .attr("d", pointerLine)
                    .style("fill", "#dc3912")
                    .style("stroke", "#c63310")
                    .style("fill-opacity", 0.7)

            pointerContainer.append("svg:circle")
                    .attr("cx", config.cx)
                    .attr("cy", config.cy)
                    .attr("r", 0.12 * config.raduis)
                    .style("fill", "#4684EE")
                    .style("stroke", "#666")
                    .style("opacity", 1);

            var fontSize = Math.round(config.size / 10);
            pointerContainer.selectAll("text")
                    .data([midValue])
                    .enter()
                    .append("svg:text")
                    .attr("x", config.cx)
                    .attr("y", config.size - config.cy / 4 - fontSize)
                    .attr("dy", fontSize / 2)
                    .attr("text-anchor", "middle")
                    .style("font-size", fontSize + "px")
                    .style("fill", "#000")
                    .style("stroke-width", "0px");

            updateFn(vis,50, 0);
            console.log("init done");
            return vis;
        },
        update: updateFn
    };
});