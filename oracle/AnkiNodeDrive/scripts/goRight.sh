  for i in `./getDeviceAddresses.sh 7801 | sed -n '1,5p'`; do
    echo $i
    echo "Command: curl -X POST http://localhost:7801/changeLanes/$i/-68"
    curl -X POST http://localhost:7801/changeLanes/$i/58
  done
  for i in `./getDeviceAddresses.sh 7801 | sed -n '6,10p'`; do
    echo $i
    echo "Command: curl -X POST http://localhost:7801/changeLanes/$i/-68"
    curl -X POST http://localhost:7801/changeLanes/$i/58
  done
