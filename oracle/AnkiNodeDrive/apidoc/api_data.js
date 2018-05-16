define({ "api": [
  {
    "type": "get",
    "url": "/batteryLevel/:carname",
    "title": "batteryLevel",
    "name": "batteryLevel",
    "group": "Communications",
    "version": "1.0.0",
    "description": "<p>Get the current battery level of the car.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/batteryLevel/Skull",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "/batteryLevel/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  {\"battery\":97}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Communications"
  },
  {
    "type": "post",
    "url": "/connect/:carname",
    "title": "connect",
    "name": "connect",
    "group": "Communications",
    "version": "1.0.0",
    "description": "<p>This is typically not needed.  All other APIs will automatically connect if needed.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/connect/Guardian",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/connect/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Communications"
  },
  {
    "type": "post",
    "url": "/disconnect/:carname",
    "title": "disconnect",
    "name": "disconnect",
    "group": "Communications",
    "version": "1.0.0",
    "description": "<p>Use this to disconnect from the car so it can be used in a game.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/disconnect/Guardian",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/disconnect/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Communications"
  },
  {
    "type": "get",
    "url": "/getDevices",
    "title": "getDevices",
    "name": "getDevices",
    "group": "Communications",
    "version": "1.0.0",
    "description": "<p>Get a list of currently scanned devices</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/getDevices",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/getDevices"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\"carList\":\n [{\"carName\":\"Ground Shock\",\"address\":\"cc:1e:be:1e:ac:c9\",\n            \"state\":\"disconnected\",\"serviceUuids\":\"be15beef6186407e83810bd89c4d8df4\"},\n  {\"carName\":\"Skull\",\"address\":\"d1:02:53:f9:e9:a9\",\n            \"state\":\"disconnected\",\"serviceUuids\":\"be15beef6186407e83810bd89c4d8df4\"},\n  {\"carName\":\"Guardian\",\"address\":\"fd:e3:0e:42:e2:71\",\n            \"state\":\"disconnected\",\"serviceUuids\":\"be15beef6186407e83810bd89c4d8df4\"},\n  {\"carName\":\"Thermo\",\"address\":\"fb:05:e0:d5:5f:b5\",\n            \"state\":\"disconnected\",\"serviceUuids\":\"be15beef6186407e83810bd89c4d8df4\"}]}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Communications"
  },
  {
    "type": "get",
    "url": "/ping/:carname",
    "title": "ping",
    "name": "ping",
    "group": "Communications",
    "version": "1.0.0",
    "description": "<p>Try and communicate with a given car.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/ping/Skull",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/ping/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"ping\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Communications"
  },
  {
    "type": "post",
    "url": "/rescan",
    "title": "rescan",
    "name": "rescan",
    "group": "Communications",
    "version": "1.0.0",
    "description": "<p>Do a bluetooth rescan for cars.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/rescan",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/rescan"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Communications"
  },
  {
    "type": "post",
    "url": "/turnOnLogging/:carname",
    "title": "turnOnLogging",
    "name": "turnOnLogging",
    "group": "Communications",
    "version": "1.0.0",
    "description": "<p>Turn on server-side logging for the car.  This is used for debugging purposes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/turnOnLogging/Skull",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/turnOnLogging/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Communications"
  },
  {
    "type": "post",
    "url": "/changeLanes/:carname/:changeValue",
    "title": "changeLanes",
    "name": "changeLanes",
    "group": "Drive",
    "version": "1.0.0",
    "description": "<p>Move the care left or right.  This is relative to a given offset (/setLaneOffset). Typically, with zero in the centre of the track, +68 - Far right lane +24 - Middle right lane -24 - Middle left lane 068 - Far left lane</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "changeValue",
            "description": "<p>Value (Change value -68 - +68)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/changeLanes/Skull/24",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/changeLanes/:carname/changeValue"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Drive"
  },
  {
    "type": "post",
    "url": "/setLaneOffset/:carname/:changeValue",
    "title": "setLaneOffset",
    "name": "setLaneOffset",
    "group": "Drive",
    "version": "1.0.0",
    "description": "<p>Set a lane offset for a given car.  All future changeLanes commands are relative to this point. Ideally, this is set based on where the car is currently located +68 - Far right lane +24 - Middle right lane -24 - Middle left lane 068 - Far left lane</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "changeValue",
            "description": "<p>Value (Change value -68 - +68)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/setLaneOffset/Ground%20Shock/68",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/setLaneOffset/:carname/:changeValue"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Drive"
  },
  {
    "type": "post",
    "url": "/setSpeed/:carname/:speed",
    "title": "setSpeed",
    "name": "setSpeed",
    "group": "Drive",
    "version": "1.0.0",
    "description": "<p>This will start or stop(speed = 0) a car.  Typical values are from 300 - 1200.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>Speed (From about 300-1200. This is mm/sec)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/setSpeed/Guardian/600",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/setSpeed/:carname/:speed"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Drive"
  },
  {
    "type": "post",
    "url": "/trackCountTravel/:carname/:trackCount/:speed",
    "title": "trackCountTravel",
    "name": "trackCountTravel",
    "group": "Drive",
    "version": "1.0.0",
    "description": "<p>Have a given car travel 'trackCount' segments at a given speed.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trackCount",
            "description": "<p>Number of tracks segments to travel before stopping.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "speed",
            "description": "<p>Speed (From about 300-1200. This is mm/sec)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801//trackCountTravel/Skull/15/800",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/trackCountTravel/:carname/:trackCount/:speed"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Drive"
  },
  {
    "type": "post",
    "url": "/flashTaillights/:carname",
    "title": "flashTaillights",
    "name": "flashTaillights",
    "group": "Lights",
    "version": "1.0.0",
    "description": "<p>Flash the back tail lights.  This is a blinking red light.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/flashTaillights/Thermo",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/flashTaillights/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Lights"
  },
  {
    "type": "post",
    "url": "/setEngineLight/:carname/:red/:green/:blue",
    "title": "setEngineLight",
    "name": "setEngineLight",
    "group": "Lights",
    "version": "1.0.0",
    "description": "<p>Set the colour of the engine light.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "allowedValues": [
              "0-15"
            ],
            "optional": false,
            "field": "red",
            "description": "<p>Red value (0-15)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "allowedValues": [
              "0-15"
            ],
            "optional": false,
            "field": "green",
            "description": "<p>Green value (0-15)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "allowedValues": [
              "0-15"
            ],
            "optional": false,
            "field": "blue",
            "description": "<p>Blue value (0-15)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/setEngineLight/Skull/15/0/15",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/setEngineLight/:carname/:red/:green/:blue"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Lights"
  },
  {
    "type": "post",
    "url": "/turnOffHeadlights/:carname",
    "title": "turnOffHeadlights",
    "name": "turnOffHeadlights",
    "group": "Lights",
    "version": "1.0.0",
    "description": "<p>Turn off the front flashing headlights.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/turnOffHeadlights/Nuke",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/turnOffHeadlights/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Lights"
  },
  {
    "type": "post",
    "url": "/turnOffTaillights/:carname",
    "title": "turnOffTaillights",
    "name": "turnOffTaillights",
    "group": "Lights",
    "version": "1.0.0",
    "description": "<p>Turn off the back tail lights.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/turnOffTaillights/Thermo",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/turnOffTaillights/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Lights"
  },
  {
    "type": "post",
    "url": "/turnOnHeadlights/:carname",
    "title": "turnOnHeadlights",
    "name": "turnOnHeadlights",
    "group": "Lights",
    "version": "1.0.0",
    "description": "<p>Turn on the front flashing headlights.  This simulates the car shooting forward weapons.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/turnOnHeadlights/Nuke",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/turnOnHeadlights/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Lights"
  },
  {
    "type": "post",
    "url": "/turnOnTaillights/:carname",
    "title": "turnOnTaillights",
    "name": "turnOnTaillights",
    "group": "Lights",
    "version": "1.0.0",
    "description": "<p>Turn on the back tail lights.  This is a solid red light.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ankidrive:7801/turnOnTaillights/Guardian",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/turnOnTaillights/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Lights"
  },
  {
    "type": "get",
    "url": "/getTrackMap/:size",
    "title": "getTrackMap",
    "name": "getTrackMap",
    "group": "Mapping",
    "version": "1.0.0",
    "description": "<p>Get a map of the existing track.  Note: This will return an error message unless '/mapTrack' has been run.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>Size of the png image returned. (Values: small, medium, large) (64px/track,128px/track,256px/track)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X GET http://ankidrive:7801/getTrackMap/medium",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/getTrackMap/:size"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Mapping"
  },
  {
    "type": "get",
    "url": "/getTrackMapData",
    "title": "getTrackMapData",
    "name": "getTrackMapData",
    "group": "Mapping",
    "version": "1.0.0",
    "description": "<p>Get a map data of the existing track.  This returns an array of numbers.<br> These numbers mean:<br> 0 - No track<br> 1 - Start/Finish<br> 2 - Straight Horizontal<br> 3 - Straight Vertical<br> 4 - Curve - North -&gt; East (West -&gt; South)<br> 5 - Curve - East -&gt; South (North -&gt; West)<br> 6 - Curve - West -&gt; North (South -&gt; East)<br> 7 - Curve - South -&gt; West (East -&gt; North)<br> 8 - Straight Horizontal over Vertical<br> 9 - Straight Vertical over Horizontal<br> 10 - Curve - North -&gt; East over Vertical<br> 11 - Curve - North -&gt; West over Vertical<br> 12 - Curve - South -&gt; East over Vertical<br> 13 - Curve - South -&gt; West over Vertical<br> 14 - Curve - North -&gt; East over Horizontal<br> 15 - Curve - North -&gt; West over Horizontal<br> 16 - Curve - South -&gt; East over Horizontal<br> 17 - Curve - South -&gt; West over Horizontal<br></p> <p>Note: This will return an error message unless '/mapTrack' has been run.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X GET http://ankidrive:7801/getTrackMapData",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/getTrackData"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"map\": \"[[0,0],[1,2],[3,2],[5,6]]\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Mapping"
  },
  {
    "type": "post",
    "url": "/mapLoad",
    "title": "mapLoad",
    "name": "mapLoad",
    "group": "Mapping",
    "version": "1.0.0",
    "description": "<p>Load the track data from a local file.  Only one map can be saved.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST http://ankidrive:7801/mapLoad",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/mapLoad"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n  UTF8 - image/png",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Mapping"
  },
  {
    "type": "post",
    "url": "/mapSave",
    "title": "mapSave",
    "name": "mapSave",
    "group": "Mapping",
    "version": "1.0.0",
    "description": "<p>Save the track data to a local file.  Only one map can be saved.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST http://ankidrive:7801/mapSave",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/mapSave"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n  UTF8 - image/png",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Mapping"
  },
  {
    "type": "post",
    "url": "/mapTrack/:carname",
    "title": "mapTrack",
    "name": "mapTrack",
    "group": "Mapping",
    "version": "1.0.0",
    "description": "<p>Build a map of the existing track.  To use, place a car on the track (in the 'right direction based on starting line) and call this api.  Once the car completes two passes over the starting line, the track map will be complete and the car will stop.  Then, the '/getTrackMap' API will be active.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "carname",
            "description": "<p>Name of the car to be used to map the track. (e.g. Skull, Thermo, etc)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST http://ankidrive:7801/mapTrack/Skull",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://ankidrive:7801/mapTrack/:carname"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n  UTF8 - image/png",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Mapping"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "_home_oracle_AnkiNodeDrive_apidoc_main_js",
    "groupTitle": "_home_oracle_AnkiNodeDrive_apidoc_main_js",
    "name": ""
  }
] });
