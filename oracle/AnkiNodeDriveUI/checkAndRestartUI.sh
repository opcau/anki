#!/bin/bash

numberRunning=`ps -ef | grep grunt | grep -v checkAndRestartUI.sh | grep -v grep | wc -l`

if [ $numberRunning -lt 1 ]; then
  /bin/date >> ${HOME}/AnkiNodeDriveUI.log
  cd ${HOME}/AnkiNodeDriveUI;${HOME}/AnkiNodeDriveUI/run.sh >> ${HOME}/AnkiNodeDriveUI.log&
fi
