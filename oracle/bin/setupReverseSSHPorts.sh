#!/bin/bash

basePort=`cat /home/oracle/basePort.txt`
echo "Base PortNumber: ${basePort}"

# Not used for VM.
helicopterPort=`cat /home/oracle/heliPort.txt`
echo "Helicopter PortNumber: ${helicopterPort}"

drivePort=`cat /home/oracle/drivePort.txt`
echo "Drive PortNumber: ${drivePort}"

driveUiPort=`cat /home/oracle/driveUiPort.txt`
echo "Drive UI PortNumber: ${driveUiPort}"

sshPort=`cat /home/oracle/sshPort.txt`
echo "SSH PortNumber: ${sshPort}"

autosshBasePort="20${basePort}0"
autosshEchoPort="20${basePort}1"

autossh -M ${autosshBasePort}:${autosshEchoPort} -q -f -N -o "ServerAliveInterval 60" -o "ServerAliveCountMax 3" -R [::]:${drivePort}:localhost:7877 -R [::]:${driveUiPort}:localhost:7901 -R [::]:${sshPort}:localhost:22 iot@ankiot.opcau.com >> /home/oracle/sshTunnel.log
