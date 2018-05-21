/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * controlButtons module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtable','ojs/ojarraytabledatasource', 'canvasspeedo', 'tbe', 'digitaldisplay', 'xcanvas'
], function (oj, ko) {
    var currentLap = 0;

    function speedWatcher(arg) {
        if (carSpeedoList[arg].active === true) {
            if (carSpeedoList[arg].dataReceived === false) {
                // NO data over the past 10 seconds.  Set speed to zero.
                if (carSpeedoList[arg].vis.value() !== 0) {
                    carSpeedoList[arg].vis.animatedUpdate(0, 500);
                    clearInterval(carSpeedoList[arg].timer);
                    carSpeedoList[arg].active = false;
                }
            } else {
                // Set 'no data' so next time it will set speed to zero if we haven't gotten any.
                carSpeedoList[arg].dataReceived = false;
            }
        }
    }

    function offtrackFlash(arg) {
        if (arg.count === 0)
            return;

        var offTrackDivs = $('[id="offtrack"]');
        var offTrackImageDivs = $('[id="offtrackimage"]');
        var newcount = arg.count - 1;
        if (arg.count % 2 === 0) {
            offTrackDivs[arg.carNumber].style.opacity = 0.5;
            offTrackImageDivs[arg.carNumber].style.opacity = 1;
            setTimeout(offtrackFlash, 1000, {carNumber: arg.carNumber, count: newcount});
        } else {
            offTrackDivs[arg.carNumber].style.opacity = 0;
            offTrackImageDivs[arg.carNumber].style.opacity = 0;
            setTimeout(offtrackFlash, 1000, {carNumber: arg.carNumber, count: newcount});

        }
    }

    function carContentViewModel($params) {
        var carNumberOrig = $params;
        //var carNameUrl = carNameOrig.replace(/\s/g,"%20");
        var carNameLowercase = "car";
        var self = this;


        var lapArray = new Array();
        self.lapObservableArray = ko.observableArray(lapArray);
        self.datasource = new oj.ArrayTableDataSource(self.lapObservableArray, {idAttribute: 'Lap'});
                
        postbox.subscribe(function (newValue) {
            //self.carName(newValue);
            carNameLowercase = newValue.replace(/\s/g, "").toLowerCase()
            this.carImage("images/" + carNameLowercase + ".png");
        }, this, "carNameChanged" + carNumberOrig);
        postbox.subscribe(function (newValue) {
            self.carAddress(newValue);
            var offTrackDivs = $('[id="offtrack"]');
            var offTrackImageDivs = $('[id="offtrackimage"]');
            offTrackDivs[carNumberOrig].style.opacity = 0;
            offTrackImageDivs[carNumberOrig].style.opacity = 0;
        }, this, "carAddressChanged" + carNumberOrig);
        postbox.subscribe(function (newValue) {
            self.carAddress(newValue);
            setTimeout(offtrackFlash, 1000, {carNumber: carNumberOrig, count: 8});
        }, this, "offtrack" + carNumberOrig);
        postbox.subscribe(function (newValue) {
            if (newValue) {
                self.statusImage("images/greenLight.png");
            } else {
                self.statusImage("images/redLight.png");
            }
        }, this, "carSdkChanged" + carNumberOrig);
        postbox.subscribe(function (newValue) {
            if (newValue === "connected") {
                self.connectCheckbox(true);
                self.carImage("images/" + carNameLowercase + "Connected.png");
            } else {
                self.connectCheckbox(false);
                self.carImage("images/" + carNameLowercase + ".png");
            }
        }, this, "carConnectChanged" + carNumberOrig);
        postbox.subscribe(function (newValue) {
            carSpeedoList[carNumberOrig].vis.animatedUpdate(newValue / 10, 500);
            carSpeedoList[carNumberOrig].dataReceived = true;
            // Create a watcher.
            if (carSpeedoList[carNumberOrig].active === false) {
                var timer = setInterval(speedWatcher, 2000, carNumberOrig);
                carSpeedoList[carNumberOrig].timer = timer;
                carSpeedoList[carNumberOrig].active = true;

            }
        }, this, "carSpeedChanged" + carNumberOrig);
        postbox.subscribe(function (lapJson) {
            var lapnumber = lapJson.lapnumber;
            var laptime = (lapJson.laptime / 1000);

            //self.datasource.at(0).parrent.attr('style', 'font-weight:bold;');

            if (lapnumber > currentLap) {
              // leaderimage
              var leaderimages = $('[id="leaderimage"]');
              for(var i=0;i<leaderimages.length;i++) {
                  leaderimages[i].style.opacity=0;
              }
              leaderimages[carNumberOrig].style.opacity=.8;
              console.log("Current lap before: "+currentLap);
              currentLap = lapnumber;
              console.log("Current lap after: "+currentLap);
            }
        }, this, "lap" + carNumberOrig);
        self.clickedButton = ko.observable("(None clicked yet)");
        self.connectCheckbox = ko.observable(false);
        self.statusImage = ko.observable("images/redLight.png");
        self.speedValue = ko.observable(0);
        //self.carName = ko.observable("car")
        self.carAddress = ko.observable("00:00:00:00:00:00");
        self.laneValue = ko.observable(1);
        self.latestResponse = ko.observable("...");
        self.carImage = ko.observable("images/" + carNameLowercase + ".png");
        self.myRowRenderer = function (r) {
            //
            if(r.row.First === true) {
              r.rowContext.parentElement.style.backgroundColor = "LawnGreen";              
            }
            //var x = r.rowContext.parentElement.style;
            return ("<td>"+r.row.Lap+"</td><td>"+r.row.Time+"</td>");
        }

        ko.bindingHandlers.canvasspeedo = {
            init: function (element, valueAccessor) {
                var name = valueAccessor();
                var mySpeedo = new Speedometer(element, {theme: 'default', max: 120,
                    thresholdlow: 60, thresholdPivotLow: 30,
                    thresholdmed: 40, thresholdPivotMed: 80,
                    thresholdhigh: 20, thresholdPivotHigh: 110
                });
                mySpeedo.update(0);
                mySpeedo.max(140);
                mySpeedo.draw();
                carSpeedoList.push({name: self.carName, vis: mySpeedo, active: false, dataReceived: false});
            },
            update: function (element, valueAccessor) {
            }
        }

        $("#offtrack").css("opacity", 0);
    }

    return carContentViewModel;
});