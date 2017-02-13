<?php
$connect = mysqli_connect("localhost", "root", "", "login");
$request = json_decode( file_get_contents('php://input') );
$variable = $request->data ; 
echo "$variable";
$result = mysqli_query($connect,"DELETE FROM users WHERE id = '$variable'");
?>