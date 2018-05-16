/**
 * header module
 */
carList = [];

define(['ojs/ojcore', 'knockout', 'ojs/ojdialog', 'locationpicker', 'ojs/ojinputtext'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function getHostPorts() {
        var hostUrlList = document.getElementById("hostPort").value
        var hostUrls = hostUrlList.split(",");
        console.log("hostUrls Size: " + hostUrls.length);
        for (var i = 0; i < hostUrls.length; i++) {
            hostUrls[i] = hostUrls[i].trim();
            console.log("'" + hostUrls[i] + "'");
        }
        return hostUrls;
    }
    function showPosition(position) {
        $("#locationLat").val(position.coords.latitude);
        $("#locationLong").val(position.coords.longitude);
    }
    function errorCallback(err) {
        if (err.code == 1) {
            window.alert("The location acquisition process failed because the document does not have permission to use the Geolocation API.");
        }
        if (err.code == 2) {
            window.alert("The position of the device could not be determined.");
        }
        if (err.code == 3) {
            window.alert("Timout reached while trying to get location.");
        }
    }

    function headerContentViewModel() {
        var self = this;

        var thisHost = decodeURIComponent(window.location.href);
        $(".hostPort").ojInputText({"value": "xyz"});
        var l = document.createElement("a");
        l.href = thisHost;
        var uiport = l.port;
        var baseport = uiport.substr(2, 2);
        if(baseport === "") {
          self.hostPort = ko.observable(l.protocol + "//" + l.hostname + ":7801");
        } else {
          self.hostPort = ko.observable(l.protocol + "//" + l.hostname + ":78" + baseport);
        }
        self.groupId = ko.observable("None");

        self.clickedButton = ko.observable("(None clicked yet)");

        self.buttonClick = function (data, event) {
            self.handleOKClose = $("#testOkButton").click(function () {
                $("#testModalDialog").ojDialog("close");
            });
            self.handleOKClose = $("#mapOkButton").click(function () {
                $("#locationLat").val($("#latText").val());
                $("#locationLong").val($("#longText").val());
                $("#mapModalDialog").ojDialog("close");
            });
            $('#mapModalDialog').on('shown.bs.modal', function () {
                $('#mapComponent').locationpicker('autosize');
            });

            self.clickedButton(event.currentTarget.id);
            //var carList = ['Thermo','Guardian','Ground Shock','Skull','Nuke','Big Bang','Free Wheel','X52']

            if (event.currentTarget.id === "test") {
                var xhttp = new XMLHttpRequest();
                var hostPorts = getHostPorts();
                var status = "";
                for (var h = 0; h < hostPorts.length; h++) {
                    xhttp.open("GET", hostPorts[h] + "/getDevices", false);
                    xhttp.setRequestHeader("Content-type", "application/json");
                    try {
                        xhttp.send();
                        status += "For URL: '" + hostPorts[h] + "' : Success.<br/>";
                    } catch (err) {
                        status += "For URL: '" + hostPorts[h] + "' : Failed.  Unable to connect.<br/>Message: " + err.toString() + "<br/>";
                    }
                }
                $("#testDialogText").html(status);
                $("#testModalDialog").ojDialog("open");
                return true;
            }

            if (event.currentTarget.id === "Refresh") {
                var hostPorts = getHostPorts();

                // Get Group ID
                // Assume all servers are the same.
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", hostPorts[0] + "/getGroupId", false);
                xhttp.send();
                var jsonResponse = JSON.parse(xhttp.responseText);
                var groupId = jsonResponse.groupId;
                console.log("Group id: " + groupId);
                this.groupId(groupId);


                // Assume all are disconnected and no Sdk.
                for (c = 0; c < carList.length; c++) {
                    carList[c].sdkOn = false;
                    carList[c].connectState = "disconnected";
                    carList[c].hostConnectionNumber = -1;
                }
                var status = "";
                for (var h = 0; h < hostPorts.length; h++) {
                    var xhttp = new XMLHttpRequest();
                    xhttp.open("GET", hostPorts[h] + "/getDevices", false);
                    xhttp.setRequestHeader("Content-type", "application/json");
                    xhttp.send();
                    var jsonResponse = JSON.parse(xhttp.responseText);
                    for (var i = 0; i < jsonResponse.carList.length; i++) {
                        // See if the carList currently has this car and what its state is.
                        var address = jsonResponse.carList[i].address;
                        var found = -1;
                        for (c = 0; c < carList.length; c++) {
                            if (carList[c].address === address) {
                                found = c;
                            }
                        }
                        if (found === -1) { // Not found
                            console.log("Push car: " + jsonResponse.carList[i].carName);
                            carList.push(jsonResponse.carList[i]);
                            carList[carList.length - 1].connectState = jsonResponse.carList[i].connectState; // Not connected yet.
                            carList[carList.length - 1].sdkOn = jsonResponse.carList[i].sdkOn; // Not connected yet.
                            if (jsonResponse.carList[i].connectState === "connected") {
                                carList[carList.length - 1].hostConnectionNumber = h; // Not connected yet.
                            } else {
                                carList[carList.length - 1].hostConnectionNumber = -1; // Not connected yet.
                            }
                        } else {
                            // If this is in our list, update connected/sdk if the are on.
                            if (jsonResponse.carList[i].connectState === "connected") {
                                carList[found].connectState = "connected";
                                console.log("**** [" + carList[found].carName + "]Setting host connection number to " + h);
                                carList[found].hostConnectionNumber = h; // Already connected.
                            }
                            if (jsonResponse.carList[i].sdkOn) {
                                carList[found].sdkOn = true;
                            }
                        }
                    }
                }
                for (var i = 0; i < carList.length; i++) {
                    var controlId = "#" + i + "Controls";
                    $(controlId).show();
                    var carName = carList[i].displayName;
                    postbox.notifySubscribers(carName, "carNameChanged" + i);
                    var carAddress = carList[i].address;
                    postbox.notifySubscribers(carAddress, "carAddressChanged" + i);
                    var connectState = carList[i].connectState;
                    postbox.notifySubscribers(connectState, "carConnectChanged" + i);
                    var sdkOn = carList[i].sdkOn;
                    postbox.notifySubscribers(sdkOn, "carSdkChanged" + i);

                    //*** Update dashboards ***/
                    // http://anki.opcau.com/apex/pdb1/anziot/anki/currentState/
                    var xhttp = new XMLHttpRequest();
                    //xhttp.open("POST", "http://localhost:9998/log", true);
                    xhttp.open("POST", "http://anki.opcau.com/apex/pdb1/anziot/anki/currentState/", true);
                    xhttp.setRequestHeader("Content-type", "application/json");
                    var json = JSON.stringify({groupId: this.groupId(), carName: carName, address: carAddress, connectState: connectState});

                    xhttp.send(json);
                }
                return true;
            }

            if (event.currentTarget.id === "resetLaps") {
                var xhttp = new XMLHttpRequest();

                var hostPorts = getHostPorts();
                for (var h = 0; h < hostPorts.length; h++) {
                  xhttp.open("GET", hostPorts[h] + "/resetLapCounts", false);
                  xhttp.setRequestHeader("Content-type", "application/json");
                  xhttp.send();
                }
            }
            if (event.currentTarget.id === "restartServer") {
                var xhttp = new XMLHttpRequest();

                var hostPorts = getHostPorts();
                for (var h = 0; h < hostPorts.length; h++) {
                  xhttp.open("GET", hostPorts[h] + "/exit", false);
                  xhttp.setRequestHeader("Content-type", "application/json");
                  xhttp.send();
                }
            }

            if (event.currentTarget.id === "getlocation") {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition, errorCallback, {timeout: 10000});
                } else {
                    alert("Geolocation is not supported by this browser.");
                }
            }
            if (event.currentTarget.id === "picklocation") {
                $("#mapDialogText").html("<h3>Place the marker at your location.</h3>");
                $("#latText").val($("#locationLat").val());
                $("#longText").val($("#locationLong").val());
                $("#mapModalDialog").ojDialog("open");
                $('#mapComponent').locationpicker({
                    location: {
                        latitude: -33.7972786,
                        longitude: 151.1438264
                    },
                    radius: 0,
                    enableAutocomplete: true,
                    inputBinding: {
                        locationNameInput: $('#addressInput'),
                        radiusInput: $('#us2-radius')
                    },
                    onchanged: function (currentLocation, radius, isMarkerDropped) {
                        $("#latText").val(currentLocation.latitude);
                        $("#longText").val(currentLocation.longitude);

                    }
                });
            }

        }
    }

    return headerContentViewModel;
});

