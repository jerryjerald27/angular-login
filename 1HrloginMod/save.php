<?php

session_start();
$connect = mysqli_connect("localhost", "root", "", "login");
$data = json_decode(file_get_contents("php://input"));
$password= $data->password;
$username = $data->username;
$getID = mysqli_fetch_assoc(mysqli_query($connect,"SELECT id FROM users WHERE username = '$username' AND password ='$password'"));
$userID = $getID['id'];
echo $userID;
$_SESSION["loggedinid"] = $userID;
echo json_encode("succesfully saved");
?>