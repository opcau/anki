This Pi/VM is to be used with the Anki Race Car set.

After booting, be sure to:

1. update the RegInfo.txt on the desktop.
   This enables the cloud servers to know who is registered.
   Make sure the GroupID is something you use for all your devices.
   Once you set the GroupID, you should not need to change it again.
2. Configure the network as needed

You are now ready to run the cars.  Double-click the "Anki Node Drive UI" to drive the cars.
Use the "Tail Server Log" to verify data is flowing (green-light icon on UI).

If problems arise, try restarting the server or Pi/VM

Note: You can only control 5 cars at a time for a USB/BTLE device.

To use Total.js/Flow, open a browser to the Pi/VM at port 8000
e.g.
http://mypi:8000

- 

V1.0 - Initial Release
V2.0 - Updated to send data to both IoT and SX
V2.1 - Updated UI with more info on status of cars
     - Added Lap data
     - Made things work even if IoT is not available (SX only)
V5.0 - Inline with Pi version
     - Support for remote access (UI runs as server so you can open a port and access the UI.)
     - Support for multiple Drive Servers (Just add more servers to the UI as a comma list.  (These can bin in or outside the VM)
     - Support for updates to the DB dashboard to show current car states.
v5.2 - Updates to support the new V5 rollout.
v6.0 - Updates to support NSW Education and Total.js/Flow
