#!/bin/bash
. /home/oracle/Desktop/RegInfo.txt
export GroupID # Force it into the env for Node
echo "GroupID $GroupID"
export NODE_MODULES=/usr/lib/node_modules
export NODE_PATH=/usr/lib/node_modules
/usr/bin/node /home/oracle/AnkiNodeDrive/server.js 7801 >> /home/oracle/AnkiNodeDrive.log
