<?php

session_start();

$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbase_name = "pruebacarles";

$usuario = $_POST['usuario'];
$password = $_POST['password'];

if (isset($_SESSION['id'])) {
    echo "200";
} else {
    $connection = new mysqli($servername, $username, $dbpassword, $dbase_name)or die("Connection Error: " . mysql_error());

    $sql = "SELECT * FROM usuarios WHERE usuario='$usuario' AND password:'$password'";
    $result = $connection->query($sql);

    while ($row = mysqli_fetch_array($result)) {
        $count = $row['usuario'];
    }

    if ($count > 0) {
        $_SESSION['id'] = 1;
        echo "200";
    } else {
        $_SESSION['id'] = 0;
        echo "404";
    }
}
?>

