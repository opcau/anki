/home/oracle/ankiNodeDrive/scripts/getDeviceNames.sh | while read i; do
  carName=${i// /%20}
  curl -s -X POST http://localhost:7801/disconnect/${carName} > /dev/null
done
