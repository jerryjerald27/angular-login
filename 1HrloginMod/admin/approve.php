<?php
$connect = mysqli_connect("localhost", "root", "", "login");
$request = json_decode( file_get_contents('php://input') );
$variable = $request->data ; 
$variable2 = $request->username ; 
$variable3 = $request->password ; 

echo "$variable3";

$result = mysqli_query($connect,"DELETE FROM aprove WHERE aid = '$variable'");


$result2 = mysqli_query($connect,"INSERT INTO users (`id`, `username`, `password`, `name` ,`gender`, `address`, `phone`, `email`, `bloodgroup`,`job`, `token`) VALUES (NULL, '$variable2', '$variable3','','','','','','','','')");

?>