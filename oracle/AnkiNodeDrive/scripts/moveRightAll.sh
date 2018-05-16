/home/oracle/ankiNodeDrive/scripts/getDeviceNames.sh | while read i; do
  carName=${i// /%20}
  echo "http://localhost:7801/changeLanes/${carName}/68"
  curl -s -X POST http://localhost:7801/changeLanes/${carName}/68
done
