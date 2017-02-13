<?php
$connect = mysqli_connect("localhost", "root", "", "login");


$data = json_decode(file_get_contents("php://input"));


$uid=$data->id;
$uname = $data->username;
$password=$data->password;
$name= $data->name;
$gender= $data->gender;
$address= $data->address;
$phone= $data->phone;
$email= $data->email;
$blood= $data->bloodgroup;
$job= $data->job;



 $result2 = mysqli_query($connect,"UPDATE users SET username= '$uname' ,password = '$password', name = '$name', gender ='$gender', address = '$address', phone = '$phone', email = '$email', bloodgroup = '$blood', job = '$job' WHERE id ='$uid'"); //or die("Failed to query database".mysql_error());


?>