<?php
$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbase_name = "pruebacarles";

$idBorrar = $_GET['id'];

$connection = new mysqli($servername,$username,$dbpassword,$dbase_name) or die("Connection Error: " . mysql_error());

$sql = "DELETE FROM usuarios WHERE id = '$idBorrar'";
$result = $connection->query($sql);

$connection->close();
?>
