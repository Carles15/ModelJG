<?php
$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbase_name = "pruebacarles";

$id = $_POST['id'];
$usuario = $_POST['usuario'];
$password = $_POST['password'];

$connection = new mysqli($servername,$username,$dbpassword,$dbase_name) or die("Connection Error: " . mysql_error());

$sql = "UPDATE usuarios SET usuario = '$usuario', password = '$password' WHERE id = '$id'";
$result = $connection->query($sql);

$connection->close();
?>

