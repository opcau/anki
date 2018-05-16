#!/bin/bash

if [ -e "/home/oracle/AnkiNodeDrive/server.js" ]
then
  numberRunning=`ps -ef | grep \/home\/oracle\/AnkiNodeDrive\/server.js | grep -v checkAndRestartANDServer.sh | grep -v grep | wc -l`
  if [ $numberRunning -lt 1 ]; then
    export NODE_PATH=/usr/local/lib/node_modules
    /bin/date >> /home/oracle/AnkiNodeDrive.log
    cd /home/oracle/AnkiNodeDrive;sudo /home/oracle/AnkiNodeDrive/run.sh >> /home/oracle/AnkiNodeDrive.log&
  fi
else
  numberRunning=`ps -ef | grep \/home\/pi\/AnkiNodeDrive\/server.js | grep -v checkAndRestartANDServer.sh | grep -v grep | wc -l`
  if [ $numberRunning -lt 1 ]; then
    export NODE_PATH=/usr/local/lib/node_modules
    /bin/date >> /home/pi/AnkiNodeDrive.log
    cd /home/pi/AnkiNodeDrive;sudo /home/pi/AnkiNodeDrive/run.sh >> /home/pi/AnkiNodeDrive.log&
  fi

fi
