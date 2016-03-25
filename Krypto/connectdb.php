<?php
        $con=mysql_connect("localhost","root","");
          
if(mysql_select_db("kryptotech",$con))

else
echo"not connected";





?>
