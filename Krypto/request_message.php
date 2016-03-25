<html>
<head>
</head>
<body>
<?php
         
            $name=$_REQUEST["name"];
            $email=$_REQUEST["email"];
            $message=$_REQUEST["messageText"];
         
            include("connectdb.php");
	 $q1="insert into message(name,email,message) values('".$name."','".$email."','".$message."')";
                        if(mysql_query($q1,$con))
			{
				echo("<center><h1>your message has been sent to the admin....you will get your reply soon via email<h1></center>");
  
echo "<center><h2><a href='index.html'>Home</a><h2></center>";
                                                                                            }
			else
			{
				echo("registration failed");
			}
		
 
//insert into request_info(full_name,email,phone_no,course) values("name","amanjolly@gmail.com","9989898989","mtech");
 ?>
</body>
</html>