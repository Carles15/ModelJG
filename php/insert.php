<?php
$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbase_name = "pruebacarles";

$usuario = $_POST['usuario'];
$password = $_POST['password'];

$connection = new mysqli($servername,$username,$dbpassword,$dbase_name)or die("Connection Error: " . mysql_error());

$sql = "INSERT INTO usuarios VALUES(null,'$usuario','$password')";
$result = $connection->query($sql);

$connection->close();
?>
