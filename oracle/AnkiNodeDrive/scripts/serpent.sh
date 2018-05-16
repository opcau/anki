SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

while [ 1 ]; do
  for i in `./getDeviceNames.sh 7801`; do
    name=${i// /%20}
    echo $name
    echo "Command: curl -X POST http://localhost:7801/changeLanes/$name/-68"
    curl -X POST http://localhost:7801/changeLanes/$name/-68
  done
  sleep 2
  for i in `./getDeviceNames.sh 7801`; do
    name=${i// /%20}
    echo $name
    echo "Command: curl -X POST http://localhost:7801/changeLanes/$name/68"
    curl -X POST http://localhost:7801/changeLanes/$name/68
  done
  sleep 2
done
IFS=$SAVEIFS
