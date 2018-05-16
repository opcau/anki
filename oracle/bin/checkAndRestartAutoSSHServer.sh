#!/bin/bash

numberRunning=`ps -ef | grep autossh | grep -v checkAndRestartAutoSSHServer.sh | grep -v grep | wc -l`

if [ $numberRunning -lt 1 ]; then
  /bin/date >> /home/oracle/reverseTunnels.log
  /home/oracle/bin/setupReverseSSHPorts.sh >> /home/oracle/reverseTunnels.log&
fi
