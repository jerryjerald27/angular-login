<?php
//database settings
$connect = mysqli_connect("localhost", "root", "", "login");

$result = mysqli_query($connect,"SELECT * FROM aprove");

$data = mysqli_num_rows($result);



// $data = $result;

// $data = mysql_fetch_array($result);

// echo $data;

    print json_encode($data);
?>