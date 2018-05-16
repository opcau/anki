for i in `./getDeviceAddresses.sh 7801 | sed -n '6,10p'`; do
  echo $i
  curl -X POST http://localhost:7801/connect/$i
done
