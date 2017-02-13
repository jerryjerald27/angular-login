<?php
  
session_start();
$connect = mysqli_connect("localhost", "root", "", "login");
$data = json_decode(file_get_contents("php://input"));
$password= $data->password;
$username = $data->username;
$getID = mysqli_fetch_assoc(mysqli_query($connect,"SELECT adid FROM admins WHERE username = '$username' AND password ='$password'"));
$AdminID = $getID['adid'];
echo $AdminID;
$_SESSION["adminloggedinid"] = $AdminID;
echo json_encode("succesfully saved");
?>
