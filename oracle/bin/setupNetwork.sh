#!/bin/bash

#
# See if we want to use the Department of Education network or not
#
useNetwork=$(zenity --list --radiolist --text "Use Department of Education Network?:" --hide-header --column "Choice" --column "Item" True "Yes" FALSE "No")
echo "Use? ${useNetwork}"

if [ "${useNetwork}" = "Yes" ]; then
  echo "Yes"
  #
  # Get user/pass
  #
  formdata=$(zenity --forms\
         --add-entry=Username\(without\ @det.nsw.edu.au\)\
         --add-password=Password\
         --text="Network Setup"\
         --title="DET EDU Network Setup")
  arrform=(${formdata//|/ })
  user=${arrform[0]}
  pass=${arrform[1]}
  #
  # Hash pass for wpa_supplicant
  #
  hashpass=$(echo -n ${pass}| iconv -t utf16le | openssl md4 -binary | xxd -p)
  echo "HashPass: ${hashpass}"

  #
  # Replace username in wpa_supplicant.conf file
  #
  sudo mv /etc/wpa_supplicant/wpa_supplicant.conf /etc/wpa_supplicant/wpa_supplicant.conf.old
  sudo cp /etc/wpa_supplicant/wpa_supplicant.detnsw /etc/wpa_supplicant/wpa_supplicant.conf
  sudo sed -i -e 's/USERNAME/'${user}'/g' /etc/wpa_supplicant/wpa_supplicant.conf
  sudo sed -i -e 's/HASHPASS/'${hashpass}'/g' /etc/wpa_supplicant/wpa_supplicant.conf

  #
  # Replace details in cntlm.conf
  #
  sudo mv /etc/cntlm.conf /etc/cntlm.conf.old
  sudo cp /etc/cntlm.detnsw /etc/cntlm.conf
  sudo sed -i -e 's/USERNAME/'${user}'/g' /etc/cntlm.conf
  hashes=$(echo ${pass} | cntlm -H -u ${user} -d detnsw)
  echo "Hashes: ${hashes}"
  lmarr=(${hashes///})
  echo "LMARR: ${lmarr}"
  passlm=${lmarr[2]}
  echo "passlm: ${passlm}"
  passnt=${lmarr[4]}
  echo "passnt: ${passnt}"
  passntlmv2=${lmarr[6]}
  echo "passntlmv2: ${passntlmv2}"
  echo "LM: ${passlm}"
  echo "NT: ${passnt}"
  echo "v2: ${passntlmv2}"
  sudo sed -i -e 's/PASSLM/'${passlm}'/' /etc/cntlm.conf
  sudo sed -i -e 's/PASSNTLMV2/'${passntlmv2}'/' /etc/cntlm.conf
  sudo sed -i -e 's/PASSNT/'${passnt}'/' /etc/cntlm.conf
  sudo cp /etc/environment.detnsw /etc/environment
  sudo echo "Acquire::http::Proxy "http://localhost:3128/";" > /etc/apt/apt.conf.d/10proxy
  sudo systemctl enable cntlm
  sudo systemctl start cntlm
  sudo systemctl restart cntlm
  zenity --info --text "Network set to work in the school.  Please reboot the Pi."
else
  sudo cp /etc/environment.normal /etc/environment
  sudo echo "#Acquire::http::Proxy "http://localhost:3128/";" > /etc/apt/apt.conf.d/10proxy
  sudo systemctl stop cntlm
  sudo systemctl disable cntlm
  zenity --info --text "Network set to default.  Use wifi icon in the top right to connect and configure network."
  exit
fi
