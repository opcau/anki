/home/oracle/ankiNodeDrive/scripts/getDeviceNames.sh | while read i; do
  carName=${i// /%20}
  curl -s -X GET http://localhost:7801/turn/uturn/${carName} > /dev/null
done
