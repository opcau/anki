/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * maps module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojselectcombobox'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function mapsContentViewModel() {
        var self = this;
        
        self.mapImage = ko.observable($( "#hostPort").val()+"/getTrackMap/medium?"+ new Date().getTime());
        $("#mapImage").attr("src",$( "#hostPort").val()+"/getTrackMap/medium?"+ new Date().getTime());
        this.carToUse = ko.observableArray(["Skull"]);
        
        self.buttonClick = function(data, event){
                      if(event.currentTarget.id === "scantrack") {
                          // http://localhost:7877/mapTrack/Skull
                          var url = $( "#hostPort").val()+"/mapTrack/"+$( "#carSelect" ).val();
                          console.log("Scan track to url: "+url);
                          $.post(url, function(data) {
                            console.log("Ok");
                          });
                      }
                      if(event.currentTarget.id === "savemap") {
                          var url = $( "#hostPort").val()+"/mapSave";
                          console.log("Scan track to url: "+url);
                          $.post(url, function(data) {
                          });
                          
                      }
                      if(event.currentTarget.id === "loadmap") {
                          var url = $( "#hostPort").val()+"/mapLoad";
                          console.log("Scan track to url: "+url);
                          $.post(url, function(data) {
                          });
                          
                      }
                      if(event.currentTarget.id === "displaymap") {
                          console.log("Update image.");
                          this.mapImage($( "#hostPort").val()+"/getTrackMap/medium?"+ new Date().getTime());
                      }

        }
    }
    
    return mapsContentViewModel;
});
