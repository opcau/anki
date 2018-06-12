<html>
<body>
<form action="update.php" method="post">
<table>
<?php
$regfile = fopen("/home/oracle/Desktop/RegInfo.txt", "r") or die ("Can't open file");
while($line=fgets($regfile)) {
  echo("<tr>");
  list($name,$value) = explode("=",$line);
  $value = str_replace('"','',$value);
  $value = str_replace (array("\r\n", "\n", "\r"), '', $value);
  echo ("<td>".$name.":</td><td><input type=\"text\" name=\"".$name."\" value=\"".$value."\"></td>\n");
  echo("</tr>");
}
fclose($regfile);
?>
</table>
<input type="submit" value="Update">
</form>
</body>
</html>
