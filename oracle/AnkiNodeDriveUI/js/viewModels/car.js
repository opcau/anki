/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * controlButtons module
 */
define(['ojs/ojcore', 'knockout','jquery','ojs/ojknockout','ojs/ojswitch','ojs/ojslider'
], function (oj, ko) {
    
    /**
     * The view model for the main content view template
     */
    function getHostPorts() {
        var hostUrlList = document.getElementById("hostPort").value
        var hostUrls = hostUrlList.split(",");
        for(var i=0;i<hostUrls.length;i++) {
            hostUrls[i] = hostUrls[i].trim();
        }
        return hostUrls;
    }
    
    // This will figure out the best host to use if there are more than one.
    function calculateBestHost() {
        console.log("***CALCULATE BEST HOST");
        hostUrlsConnectionCount = [];
        
        var hostUrls = getHostPorts();
        for(var i=0;i<hostUrls.length;i++) {
            hostUrlsConnectionCount[i]=0;
        }
        for(var c=0;c<carList.length;c++){
            console.log("["+carList[c].carName+"]: connection number: "+carList[c].hostConnectionNumber);
          if(carList[c].hostConnectionNumber != -1) {
              console.log("counting connection to: "+carList[c].hostConnectionNumber);
              if(hostUrlsConnectionCount[carList[c].hostConnectionNumber] == null){
                  hostUrlsConnectionCount[carList[c].hostConnectionNumber]=1;
              } else {                
                hostUrlsConnectionCount[carList[c].hostConnectionNumber]++;
              }
          }
        }
        console.log("hostUrlsConnectionCount: "+hostUrlsConnectionCount.length);
        var lowest=0;
        for(var h=0;h<hostUrlsConnectionCount.length;h++) {
            console.log("["+h+"] connection count: "+hostUrlsConnectionCount[h]);
            if(hostUrlsConnectionCount[lowest] > hostUrlsConnectionCount[h]) {
                lowest=h;
            }
        }
        console.log("Best host number: "+lowest);
        return lowest;
    }
    
    function getCorrectUrl(carName, carAddress) {
        // Figure out which host is dealing with this car.
        var hostUrls = getHostPorts();
        
        var found = -1;
        for(var c=0;c<carList.length;c++) {
            console.log("Compare: "+carAddress+" =? "+carList[c].address);
            if(carAddress === carList[c].address) {
                found = c;
                console.log("Found: "+found);
                if(carList[c].hostConnectionNumber === -1) {
                    console.log("no host setup yet");
                    var bestHostNumber = calculateBestHost();
                    carList[c].hostConnectionNumber = bestHostNumber;
                    return hostUrls[bestHostNumber];
                } else {
                    return hostUrls[carList[c].hostConnectionNumber];
                }
            }
        }
            if(found === -1) {
                console.log("Couldn't find car in list...");
            }
    }
    
    function carContentViewModel($params) {
        var carNumberOrig = $params;
        //var carNameUrl = carNameOrig.replace(/\s/g,"%20");
        var carNameLowercase = "car";
        var self = this;
        var firstLaneChange = true;
        postbox.subscribe(function(newValue) {
            console.log("New value: "+newValue);
            self.carName(newValue);
            carNameLowercase = newValue.replace(/\s/g,"").toLowerCase()
            this.carImage("images/"+carNameLowercase+".png");
        }, this, "carNameChanged"+carNumberOrig);
        postbox.subscribe(function(newValue) {
            self.carAddress(newValue);
        }, this, "carAddressChanged"+carNumberOrig);
        postbox.subscribe(function(newValue) {
            if(newValue) {
                self.statusImage("images/greenLight.png");
            } else {
                self.statusImage("images/redLight.png");
            }
        }, this, "carSdkChanged"+carNumberOrig);
        postbox.subscribe(function(newValue) {
            if(newValue === "connected") {
                self.connectCheckbox(true);
            } else {
                self.connectCheckbox(false);
            }
        }, this, "carConnectChanged"+carNumberOrig);
        self.clickedButton = ko.observable("(None clicked yet)");
        self.connectCheckbox = ko.observable(false);
        self.statusImage = ko.observable("images/redLight.png");
        self.speedValue = ko.observable(0);
        self.carName = ko.observable("car")
        self.carAddress = ko.observable("00:00:00:00:00:00");
        self.laneValue = ko.observable(1);
        self.latestResponse = ko.observable("...");
        self.carImage = ko.observable("images/"+carNameLowercase+".png");
        
        self.buttonClick = function(data, event){
          self.clickedButton(event.currentTarget.id);
          var xhttp = new XMLHttpRequest();
          
          if(!self.connectCheckbox.peek()) {
            // Figure out which host is dealing with this car.
            var hostUrl = getCorrectUrl(self.carName(),self.carAddress());

            xhttp.open("POST", hostUrl+"/connect/"+self.carAddress(), false);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            self.connectCheckbox(true);
          }
          
          if(event.currentTarget.id === "startButton") {
              var hostUrl = getCorrectUrl(self.carName(),self.carAddress());
            xhttp.open("POST", hostUrl+"/setSpeed/"+self.carAddress()+"/800", true);
            self.speedValue(800);
          }
          if(event.currentTarget.id === "stopButton") {
              var hostUrl = getCorrectUrl(self.carName(),self.carAddress());
            xhttp.open("POST", hostUrl+"/setSpeed/"+self.carAddress()+"/0", true);
            self.speedValue(0);              
          }
          if(event.currentTarget.id === "uturnButton") {
              var hostUrl = getCorrectUrl(self.carName(),self.carAddress());
            xhttp.open("GET", hostUrl+"/turn/uturn/"+self.carAddress(), true);            
          }
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.send();
          return true;
        }
        self.connectChange = function(event, ui){
          if(ui.previousValue === undefined || ui.previousValue === 'undefined') { return true; }
          if(ui['option'] === "rawValue") { return true; } // We get 'value' and 'rawValue' events.... ignore one
            
          if(ui.value) {
            var xhttp = new XMLHttpRequest();
            var hostUrl = getCorrectUrl(self.carName(),self.carAddress());

            console.log("URL: "+hostUrl+"/connect/"+self.carAddress());
            xhttp.open("POST", hostUrl+"/connect/"+self.carAddress(), false);

            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();

            // Wait a second and then update the screen
            var timerVar = setInterval(function(){
                //alert("Hello");
                $("#Refresh").click();
                clearInterval(timerVar);
            }, 1000);
            //self.latestResponse(xhttp.responseText);
            
            } else {
            var xhttp = new XMLHttpRequest();
            var hostUrl = getCorrectUrl(self.carName(),self.carAddress());

            console.log("hosturl: "+hostUrl);
            xhttp.open("POST", hostUrl+"/disconnect/"+self.carAddress(), false);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            carConnectedCount=carConnectedCount-1;
            self.carImage("images/"+carNameLowercase+".png");
            var timerVar = setInterval(function(){
                //alert("Hello");
                $("#Refresh").click();
                clearInterval(timerVar);
            }, 1000);
            //self.latestResponse(xhttp.responseText);
        }
          return true;
        }
        

        self.speedChange = function(event, ui){
          if(ui.previousValue === undefined) { return true; }
          if(self.connectCheckbox.peek()) {
              var hostUrl = getCorrectUrl(self.carName(),self.carAddress());
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", hostUrl+"/setSpeed/"+self.carAddress()+"/"+ui.value, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            //self.latestResponse(xhttp.responseText);
          }
          return true;
        }
          self.laneChange = function(event, ui){
          if(ui.previousValue === undefined) { return true; }
          // If this is the first lane change, we have to set a starting point.
          if(firstLaneChange) {
              var hostUrl = getCorrectUrl(self.carName(),self.carAddress());
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", hostUrl+"/setLaneOffset/"+self.carAddress()+"/68", false); // Must do sync
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            firstLaneChange = false;
          }
          if(self.connectCheckbox.peek()) {
              var laneValue = 0;
              if(ui.value === 1) { laneValue = -68; }
              if(ui.value === 2) { laneValue = -24; }
              if(ui.value === 3) { laneValue = 24; }
              if(ui.value === 4) { laneValue = 68; }
              var hostUrl = getCorrectUrl(self.carName(),self.carAddress());
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", hostUrl+"/changeLanes/"+self.carAddress()+"/"+laneValue, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            //self.latestResponse(xhttp.responseText);

          }
          return true;
        }

        
    }
    
    return carContentViewModel;
});
