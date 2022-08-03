<?php
header("content-type: application/json");

$mysqli = new mysqli("localhost", "root", "root", "dash_of_joy", 8889);
$query = "SELECT `quote`,`author` FROM `quotes`";
$result = $mysqli->query($query);
$quotes = $result->fetch_all(MYSQLI_ASSOC);


echo json_encode($quotes);
