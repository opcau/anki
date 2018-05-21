/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Header module
 */
function getQueryStringValue (key) {  
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  

carList = [];
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojdialog', 'ojs/ojselectcombobox',
    'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojmenu'],
        function (oj, ko, $) {
            function findCarDiv(carname, address) {
                    for (var i = 0; i < carList.length; i++) {
                        if (carList[i].address === address) {
                            return i;
                        }
                    }
                    // Car not yet assigned
                        carList.push({"carName": carname, "address": address});
                        var index = carList.length - 1;
                        var controlId = "#" + index + "Controls";
                        $(controlId).show();
                        postbox.notifySubscribers(carname, "carNameChanged" + index);
                        postbox.notifySubscribers(address, "carAddressChanged" + index);
                        
                        // Get car info
                        /*
                        var xhttp = new XMLHttpRequest();
                        xhttp.open("GET", "http://anki.opcau.com/apex/pdb1/anziot/anki/CarData/" + carid, false);
                        xhttp.send();
                        var jsonResponse = JSON.parse(xhttp.responseText);
                        var carname = jsonResponse.carname;
                        var lapcount = jsonResponse.lapcount;
                        var event = jsonResponse.event;
                        self.eventName("  Current Event: " + event);
                    */
                   return index;
            }
            /**
             * The view model for the header module
             */
            function HeaderViewModel() {
                
                var self = this;
                
                // Application Name used in Branding Area
                self.appName = ko.observable("Anki Overdrive Monitor");

                // Media Queries for repsonsive header
                var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
                self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

                connectSocket(this);

                self.updateSpeed = function (deviceid, carid, carname, speed) {
                  var index=findCarDiv(carname,carid);
                  postbox.notifySubscribers(speed, "carSpeedChanged" + index);
                };
                self.offtrack = function (deviceid, carid, carname) {
                  for (var i = 0; i < carList.length; i++) {
                    if (carList[i].carName === carname) {
                      postbox.notifySubscribers("offtrack", "offtrack" + i);
                    }
                  }
                }
                self.lap = function (deviceid,datetime,carid,carname,lapnumber,laptime,trackcount) {
                  for (var i = 0; i < carList.length; i++) {
                      if (carList[i].carName === carname) {
                          postbox.notifySubscribers({"datetime":datetime,"lapnumber":lapnumber,"laptime":laptime}, "lap"+i);
                          postbox.notifySubscribers({"carnumber":i,"datetime":datetime,"lapnumber":lapnumber,"laptime":laptime}, "lap");
                      }
                  }
                }

                self.startrace = function (deviceid, starttime, carid1, carname1,
                        carid2, carname2,
                        carid3, carname3,
                        carid4, carname4) {
                    if(carname1 !== "none") { findCarDiv(carname1,carid1); }
                    if(carname2 !== "none") { findCarDiv(carname2,carid2); }
                    if(carname3 !== "none") { findCarDiv(carname3,carid3); }
                    if(carname4 !== "none") { findCarDiv(carname4,carid4); }
                    postbox.notifySubscribers(starttime, "startrace");
                }

            }
            return new HeaderViewModel();
        }
);
