#!/bin/bash

#basePort=`cat /home/oracle/basePort.txt`
basePort=99
echo "Base PortNumber: ${basePort}"

autosshBasePort="20${basePort}0"
autosshEchoPort="20${basePort}1"

#autossh -M ${autosshBasePort}:${autosshEchoPort} -q -f -N -o "ServerAliveInterval 60" -o "ServerAliveCountMax 3" -R [::]:8801:localhost:8801 oracle@129.213.37.102
autossh -M ${autosshBasePort}:${autosshEchoPort} -q -f -N -o "ServerAliveInterval 60" -o "ServerAliveCountMax 3" -R [::]:8801:localhost:8801 iot@ankiot.opcau.com
