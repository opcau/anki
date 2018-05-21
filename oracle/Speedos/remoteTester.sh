#!/bin/bash
#while [ 1 ];
#do
#  curl -s -X POST "http://ankiot.opcau.com:8002/speed/FF:FF:FF:FF:FF:FF/Thermo/"$(( ( RANDOM % 1000 )  + 1 )) >/dev/null
#  curl -s -X POST "http://ankiot.opcau.com:8002/speed/FF:FF:FF:FF:FF:FF/Guardian/"$(( ( RANDOM % 1000 )  + 1 )) >/dev/null
#  curl -s -X POST "http://ankiot.opcau.com:8002/speed/FF:FF:FF:FF:FF:FF/Skull/"$(( ( RANDOM % 1000 )  + 1 )) >/dev/null
#  curl -s -X POST "http://ankiot.opcau.com:8002/speed/FF:FF:FF:FF:FF:FF/Ground%20Shock/"$(( ( RANDOM % 1000 )  + 1 )) >/dev/null
#  curl -s -X POST "http://ankiot.opcau.com:8002/speed/FF:FF:FF:FF:FF:FF/Nuke/"$(( ( RANDOM % 1000 )  + 1 )) >/dev/null
#  curl -s -X POST -H "Content-Type: application/json" -d'{"deviceid":"abc","carid":"FF:FF:FF:FF:FF:FF","carname":"Thermo","speed":'$(( ( RANDOM % 1000 )  + 1 ))'}' "http://ankiot.opcau.com:8002/setspeed"
#  curl -s -X POST -H "Content-Type: application/json" -d'{"deviceid":"abc","carid":"FF:FF:FF:FF:FF:FE","carname":"Skull","speed":'$(( ( RANDOM % 1000 )  + 1 ))'}' "http://ankiot.opcau.com:8002/setspeed"
#  sleep 1
#done

#
# Start race
#
  curl -s -X POST -H "Content-Type: application/json" -d'{"deviceid":"abc","groupid":"Johns Group","carid1":"FF:FF:FF:FF:FF:FF","carname1":"Thermo","carid2":"FF:FF:FF:FF:FF:FE","carname2":"Skull","carid3":"FF:FF:FF:FF:FF:FD","carname3":"Ground Shock","carid4":"FF:FF:FF:FF:FF:FC","carname4":"Guardian"}' "http://ankiot.opcau.com:8002/startrace"
sleep 2;

# Lap 1
 curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"Johns Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FF","carname":"Thermo","lapnumber":1,"laptime":1000}' "http://ankiot.opcau.com:8002/lap"
sleep 2;
 curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"Johns Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FE","carname":"Skull","lapnumber":1,"laptime":1001}' "http://ankiot.opcau.com:8002/lap"
sleep 2;
 curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"Johns Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FD","carname":"Ground Shock","lapnumber":1,"laptime":1002}' "http://ankiot.opcau.com:8002/lap"
sleep 2;
 curl -s -X POST -H "Content-Type: application/json" -d'{"deviceid":"abc","carid":"FF:FF:FF:FF:FF:FD","carname":"Ground Shock"}' "http://ankiot.opcau.com:8002/offtrack"

# Lap 2
sleep 2;
 curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"Johns Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FE","carname":"Skull","lapnumber":2,"laptime":2000}' "http://ankiot.opcau.com:8002/lap"
sleep 2;
 curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"Johns Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FF","carname":"Thermo","lapnumber":2,"laptime":2001}' "http://ankiot.opcau.com:8002/lap"
sleep 2;
 curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"Johns Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FD","carname":"Ground Shock","lapnumber":2,"laptime":2002}' "http://ankiot.opcau.com:8002/lap"

# Lap 3
sleep 2;
 curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"Johns Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FD","carname":"Ground Shock","lapnumber":3,"laptime":3000}' "http://ankiot.opcau.com:8002/lap"
sleep 2;
 curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"Johns Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FE","carname":"Skull","lapnumber":3,"laptime":3001}' "http://ankiot.opcau.com:8002/lap"
sleep 2;
 curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"Johns Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FF","carname":"Thermo","lapnumber":3,"laptime":3002}' "http://ankiot.opcau.com:8002/lap"
