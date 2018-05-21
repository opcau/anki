/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * laps module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function lapsContentViewModel() {
        var self = this;
        var raceStartDateTime = 0;
        var firstPlaceLap = 0;
        var secondPlaceLap = 0;
        var thirdPlaceLap = 0;
        var bestLapInRace = 99999;
        
        postbox.subscribe(function (newValue) {
            console.log("Race start date/time: "+newValue);
            raceStartDateTime=newValue;
        }, this, "startrace");
        postbox.subscribe(function (newValue) {
            var trs = document.getElementById("lapTable").getElementsByTagName("tr");
            trs[1].getElementsByTagName('td')[0].innerHTML = newValue;
            var trs = document.getElementById("bestLapTable").getElementsByTagName("tr");
            trs[1].getElementsByTagName('td')[0].innerHTML = newValue;
        }, this, "carNameChanged0");
        postbox.subscribe(function (newValue) {
            var trs = document.getElementById("lapTable").getElementsByTagName("tr");
            trs[2].getElementsByTagName('td')[0].innerHTML = newValue;
            var trs = document.getElementById("bestLapTable").getElementsByTagName("tr");
            trs[2].getElementsByTagName('td')[0].innerHTML = newValue;
        }, this, "carNameChanged1");
        postbox.subscribe(function (newValue) {
            var trs = document.getElementById("lapTable").getElementsByTagName("tr");
            trs[3].getElementsByTagName('td')[0].innerHTML = newValue;
            var trs = document.getElementById("bestLapTable").getElementsByTagName("tr");
            trs[3].getElementsByTagName('td')[0].innerHTML = newValue;
        }, this, "carNameChanged2");
        postbox.subscribe(function (newValue) {
            var trs = document.getElementById("lapTable").getElementsByTagName("tr");
            trs[4].getElementsByTagName('td')[0].innerHTML = newValue;
            var trs = document.getElementById("bestLapTable").getElementsByTagName("tr");
            trs[4].getElementsByTagName('td')[0].innerHTML = newValue;
        }, this, "carNameChanged3");
        postbox.subscribe(function (lapJson) {
            var carnumber= lapJson.carnumber+1;
            var lapnumber = lapJson.lapnumber;
            var lapMs = ('0000'+(lapJson.laptime%1000)).slice(-3);
            var lapSec = Math.floor(lapJson.laptime/1000);
            var laptime = lapSec+"."+lapMs;
            var msSinceStartOfRace = lapJson.datetime - raceStartDateTime;
            var lapTableTR = document.getElementById("lapTable").getElementsByTagName("tr");
            var bestLapTableTR = document.getElementById("bestLapTable").getElementsByTagName("tr");
            bestLapTableTR[carnumber].getElementsByTagName('td')[lapnumber].innerHTML = laptime;
            
            if(lapnumber > firstPlaceLap) {
                lapTableTR[carnumber].getElementsByTagName('td')[lapnumber].bgColor="LawnGreen";
                firstPlaceLap=lapnumber;
                var sSinceStartOfRace =  Math.floor(msSinceStartOfRace/1000);
                var msSinceStartOfRace = ('0000'+(msSinceStartOfRace%1000)).slice(-3);
                var msSinceStartOfRaceDisplay = sSinceStartOfRace+"."+msSinceStartOfRace;
                lapTableTR[carnumber].getElementsByTagName('td')[lapnumber].innerHTML = msSinceStartOfRaceDisplay;
            } else if(lapnumber > secondPlaceLap) {
                lapTableTR[carnumber].getElementsByTagName('td')[lapnumber].bgColor="yellow";
                secondPlaceLap=lapnumber;
                var leaderTime = 0;
                for(var i=1;i<5;i++) {
                    var tdTime = lapTableTR[i].getElementsByTagName('td')[lapnumber].innerHTML;
                    if(tdTime > 0) {
                        leaderTime=tdTime;
                    }
                }
                var leaderS = leaderTime.split(".")[0];
                var leaderMS = leaderTime.split(".")[1];
                var leaderTime = parseFloat(leaderS*1000)+parseFloat(leaderMS);

                var msBehind = msSinceStartOfRace-leaderTime;
                var sBehind =  Math.floor(msBehind/1000);
                var msBehind = ('0000'+(msBehind%1000)).slice(-3);
                var msBehindDisplay = "(+"+sBehind+"."+msBehind+")";
                lapTableTR[carnumber].getElementsByTagName('td')[lapnumber].innerHTML = msBehindDisplay;
            } else if(lapnumber > thirdPlaceLap) {
                lapTableTR[carnumber].getElementsByTagName('td')[lapnumber].bgColor="orange";
                thirdPlaceLap=lapnumber;
                var leaderTime = 0;
                for(var i=1;i<5;i++) {
                    var tdTime = lapTableTR[i].getElementsByTagName('td')[lapnumber].innerHTML;
                    if(tdTime > 0) {
                        leaderTime=tdTime;
                    }
                }
                var leaderS = leaderTime.split(".")[0];
                var leaderMS = leaderTime.split(".")[1];
                var leaderTime = parseFloat(leaderS*1000)+parseFloat(leaderMS);
                var msBehind = msSinceStartOfRace-leaderTime;
                var sBehind =  Math.floor(msBehind/1000);
                var msBehind = ('0000'+(msBehind%1000)).slice(-3);
                var msBehindDisplay = "(+"+sBehind+"."+msBehind+")";
                lapTableTR[carnumber].getElementsByTagName('td')[lapnumber].innerHTML = msBehindDisplay;
            } else {
                lapTableTR[carnumber].getElementsByTagName('td')[lapnumber].bgColor="#ff4444";                 var leaderTime = 0;
                for(var i=1;i<5;i++) {
                    var tdTime = lapTableTR[i].getElementsByTagName('td')[lapnumber].innerHTML;
                    if(tdTime > 0) {
                        leaderTime=tdTime;
                    }
                }
                var leaderS = leaderTime.split(".")[0];
                var leaderMS = leaderTime.split(".")[1];
                var leaderTime = parseFloat(leaderS*1000)+parseFloat(leaderMS);
                var msBehind = msSinceStartOfRace-leaderTime;
                var sBehind =  Math.floor(msBehind/1000);
                var msBehind = ('0000'+(msBehind%1000)).slice(-3);
                var msBehindDisplay = "(+"+sBehind+"."+msBehind+")";
                lapTableTR[carnumber].getElementsByTagName('td')[lapnumber].innerHTML = msBehindDisplay;        
            }
            // Now color fastest lap
            var best1=0;
            var best1Time=999999;
            var best2=0;
            var best2Time=999999;
            var best3=0;
            var best3Time=999999;
            var best4=0;
            var best4Time=999999;
            for(var i=1;i<5;i++){
                var thislaptime = bestLapTableTR[i].getElementsByTagName('td')[lapnumber].innerHTML;
                console.log("Laptime from innerHTML: ["+i+"]"+thislaptime);
                if(thislaptime !== "") {
                if(thislaptime < best1Time) {
                    best4=best3;best3=best2;best2=best1;
                    best4Time=best3Time;best3Time=best2Time;best2Time=best1Time;
                    best1=i;
                    best1Time=thislaptime;
                } else if (thislaptime < best2Time) {
                    best4=best3;best3=best2;
                    best4Time=best3Time;best3Time=best2Time;
                    best2=i;
                    best2Time=thislaptime;
                } else if (thislaptime < best3Time) {
                    best4=best3;
                    best4Time=best3Time;
                    best3=i;
                    best3Time=thislaptime;
                } else if (thislaptime < best4Time) {
                    best4=i;
                    best4Time=thislaptime;
                }
                }
            }
            // best is actually 'worst' because it is the largest number.
            if(best1 !== 0) { console.log("Setting best1."+best1); bestLapTableTR[best1].getElementsByTagName('td')[lapnumber].bgColor="LawnGreen"; }
            if(best2 !== 0) { console.log("Setting best2."+best2); bestLapTableTR[best2].getElementsByTagName('td')[lapnumber].bgColor="yellow"; }
            if(best3 !== 0) { console.log("Setting best3."+best3); bestLapTableTR[best3].getElementsByTagName('td')[lapnumber].bgColor="orange"; }
            if(best4 !== 0) { console.log("Setting best4."+best4); bestLapTableTR[best4].getElementsByTagName('td')[lapnumber].bgColor="#ff4444"; }

            // Tag 'best lap' in race
            if(lapJson.laptime < bestLapInRace){
                console.log("New best laptime: "+lapJson.laptime+" by car "+carnumber);
              var bestLapImages = $('[id="bestlap"]');
              var bestLapTimes = $('[id="bestlaptime"]');
              for(var i=0;i<bestLapImages.length;i++) {
                  bestLapImages[i].style.opacity=0;
                  bestLapTimes[i].style.opacity=0;
              }
              bestLapImages[carnumber-1].style.opacity=.8;
              bestLapTimes[carnumber-1].style.opacity=1;
              bestLapTimes[carnumber-1].innerHTML = laptime+"("+lapnumber+")";
              bestLapInRace=lapJson.laptime;
            }
        }, this, "lap");
    }
    
    return lapsContentViewModel;
});
