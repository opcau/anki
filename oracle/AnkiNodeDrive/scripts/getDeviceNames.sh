if [ $# -gt 0 ]; then
  curl -s -X GET http://localhost:${1}/getDevices | jq -r '.carList[].carName'
else
  curl -s -X GET http://localhost:7801/getDevices | jq -r '.carList[].carName'
fi

