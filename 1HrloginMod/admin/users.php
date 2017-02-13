<?php
//database settings
$connect = mysqli_connect("localhost", "root", "", "login");

$result = mysqli_query($connect,"SELECT * FROM users");

$data = array();

while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
    print json_encode($data);
?>