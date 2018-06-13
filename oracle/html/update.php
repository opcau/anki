<?php
# Copy old reginfo.txt
exec("cp /home/oracle/Desktop/RegInfo.txt /home/oracle/Desktop/RegInfo.bck");
$regfile = fopen("/home/oracle/Desktop/RegInfo.txt", "w") or die ("Can't open file");
foreach ($_POST as $key=>$value) {
  fwrite($regfile, $key."=\"".$value."\"\n");
}
fclose($regfile);
echo ("RegInfo.txt file updated.<br/>");
exec("/home/oracle/.config/autostart/register");
?>
<button type="submit" onclick="window.close()">Close</button>
