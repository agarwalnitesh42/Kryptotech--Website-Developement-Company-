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
				//include("index.html");
				header("Location: /?q=sent");
			}
			else
			{
			//include("index.html");
				header("Location: /?q=notsent");
			}
		
 
//insert into request_info(full_name,email,phone_no,course) values("name","amanjolly@gmail.com","9989898989","mtech");
 ?>
</body>
</html>