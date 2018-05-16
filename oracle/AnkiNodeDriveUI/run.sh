#!/bin/bash

export NODE_PATH=/home/oracle/AnkiNodeDriveUI/node_modules
export NODE_MODULES=/home/oracle/AnkiNodeDriveUI/node_modules
export PATH=$PATH:/home/oracle/AnkiNodeDriveUI/node_modules/grunt-cli/bin
cd /home/oracle/AnkiNodeDriveUI/node_modules/grunt-cli && /home/oracle/AnkiNodeDriveUI/node_modules/grunt-cli/bin/grunt serve
