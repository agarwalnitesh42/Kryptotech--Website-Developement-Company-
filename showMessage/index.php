<html>
<head><title>Messages</title>

<style type="text/css">
	h1{
		color: #e74c3c;
		font-family: Arial Rounded MT;
	}
	table{
		width: 70%;
		margin: 0 auto;
		border:1px #111 solid;
		text-align: center;
		color: #333;
		font-size: 18px;
	}	

	tr{
		margin-top: 10px;
	}

	tr, td{
		border:1px #555 solid;
	}

</style>
</head>

<body>

<h1 align="center">Krypto Tech Messages</h1>



<?php
	$user=$_GET['user'];
	$pass=$_GET['pass'];
	include("../connectdb.php");
	if($user=='pratyush' && $pass=='krypto007')
	{
		$line=mysql_query("SELECT * FROM message", $con);
		while($row=mysql_fetch_array($line))
		{
			?>
			<table>
				<tr>
					<td><?php echo $row['name']; ?></td>
					<td><?php echo $row['email']; ?></td>
					<td><?php echo $row['message']; ?></td>
				</tr>
			</table>
			<?php
		}
	}

	else{
		header('Location: ../');
	}
?>

</body>
</html>