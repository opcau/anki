for i in `./getDeviceAddresses.sh 7801 | sed -n '1,5p'`; do
  echo $i
  curl -X POST http://localhost:7801/connect/$i
done
