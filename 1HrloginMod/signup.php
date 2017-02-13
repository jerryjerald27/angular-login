<?php
session_unset();
session_destroy();
// session_start();

include("connection.php");
$data = json_decode(file_get_contents("php://input"));
$username = $data->username;
$password=$data->password;

$_SESSION["username"] = $username;
$_SESSION["password"] = $password;

$q = "INSERT INTO aprove (`aid`, `username`, `password`, `status`) VALUES (NULL, :email, :password, 'Y')";
$query= $db->prepare($q);
$execute=$query->execute(array(
	":email" => $username,
	":password" => $password
	));
echo json_encode($username); 
?>