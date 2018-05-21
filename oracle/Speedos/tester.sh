#!/bin/bash
#while [ 1 ];
#do
#  curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"John'\''s Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FF","carname":"Thermo","speed":'$(( ( RANDOM % 1000 )  + 1 ))'}' "http://localhost:8002/setspeed"
#  curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"John'\''s Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FE","carname":"Skull","speed":'$(( ( RANDOM % 1000 )  + 1 ))'}' "http://localhost:8002/setspeed"
#  sleep 1
#done
#
# Start race

currentDt=`date +%s%3N`
curl -s -X POST -H "Content-Type: application/json" -d'{"groupid": "John'\''s Group", "deviceid":"abc","datetime":'${currentDt}',"carid1":"FF:FF:FF:FF:FF:FF","carname1":"Thermo","carid2":"FF:FF:FF:FF:FF:FE","carname2":"Skull","carid3":"FF:FF:FF:FF:FF:FD","carname3":"Ground Shock","carid4":"FF:FF:FF:FF:FF:FC","carname4":"Guardian"}' "http://localhost:8002/startrace"
sleep 2;
echo ""

# Laps
carNames=('Thermo' 'Skull' 'Guardian' 'Ground Shock')
carIds=('FF:FF:FF:FF:FF:FC' 'FF:FF:FF:FF:FF:FD' 'FF:FF:FF:FF:FF:FE' 'FF:FF:FF:FF:FF:FF')
carCurrentTimes=(${currentDt} ${currentDt} ${currentDt} ${currentDt})
carLapTimes=(0 0 0 0)

for lapnumber in `seq 1 15`
#for lapnumber in `seq 1 1`
do
 #randArray=(`seq 4 | shuf`)
 #
 # For this lap calculate each car's laptime
 #
 for c in `seq 0 3`
 do
   rndLaptime=$(( ( RANDOM % 1000 )  + 2000 ))
   carLapTimes[${c}]=$rndLaptime
   carCurrentTimes[${c}]=`expr ${carCurrentTimes[${c}]} + $rndLaptime`
 done
 echo ${carLapTimes[*]}
 echo ${carCurrentTimes[*]}
 sortedTimes=($(echo ${carCurrentTimes[*]}| tr " " "\n" | sort -n))
 echo ${sortedTimes[*]}

 # Send messages based on current car times
 for c in `seq 0 3`
 do
   nextToSend=${sortedTimes[${c}]}
   for i in `seq 0 3`
   do
     if [ ${carCurrentTimes[${i}]} -eq $nextToSend ]
     then
       car=${carNames[$i]}
       id=${carIds[$i]}
       laptime=${carLapTimes[$i]}
       now=${carCurrentTimes[${i}]}
       echo "Sending Car: ${car} time: ${now} laptime: ${laptime}"
       request_body=$(cat <<EOF
{
  "groupid":"John's Group",
  "deviceid":"abc",
  "datetime":${now},
  "carid":"${id}",
  "carname":"${car}",
  "lapnumber":${lapnumber},
  "laptime":${laptime}
}
EOF
)
      curl -s -X POST -H "Content-Type: application/json" --data "${request_body}" "http://localhost:8002/lap"
      echo ""

      for s in `seq 0 3`
      do
        curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"John'\''s Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FC","carname":"Thermo","speed":'$(( ( RANDOM % 1000 )  + 1 ))'}' "http://localhost:8002/setspeed"
        sleep 0.1
        curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"John'\''s Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FD","carname":"Skull","speed":'$(( ( RANDOM % 1000 )  + 1 ))'}' "http://localhost:8002/setspeed"
        sleep 0.1
        curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"John'\''s Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FE","carname":"Guardian","speed":'$(( ( RANDOM % 1000 )  + 1 ))'}' "http://localhost:8002/setspeed"
        sleep 0.1
        curl -s -X POST -H "Content-Type: application/json" -d'{"groupid":"John'\''s Group","deviceid":"abc","carid":"FF:FF:FF:FF:FF:FF","carname":"Ground Shock","speed":'$(( ( RANDOM % 1000 )  + 1 ))'}' "http://localhost:8002/setspeed"
        sleep 0.1
#        sleep 1
      done

     fi
   done
 done
done
exit
# Lap 2
