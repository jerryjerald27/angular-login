<?php

session_start();

$connect = mysqli_connect("localhost", "root", "", "login");


$logid = $_SESSION["loggedinid"];


$result = mysqli_query($connect,"SELECT * FROM users WHERE id = '$logid'");


$data = array();

while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
    print json_encode($data);

// 
?>