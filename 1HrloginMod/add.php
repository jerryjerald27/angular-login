<?php
session_start();

$username=$_SESSION['username'];
$password=$_SESSION['password'];

echo "Hey " . $username . " with password " .$password ;
echo "<br><br><br>";

$name=$_POST['name'];
$gender=$_POST['gender'];
$address=$_POST['address'];
$phone=$_POST['phone'];
$email=$_POST['email']; 
$blood=$_POST['blood'];
$job=$_POST['job'];


mysql_connect("localhost","root","");
 mysql_select_db("login");


$result = mysql_query("UPDATE users SET name = '$name', gender ='$gender', address = '$address', phone = '$phone', email = '$email', bloodgroup = '$blood', job = '$job' WHERE username='$username' AND password='$password';"	); //or die("Failed to query database".mysql_error());

echo "Data updated successfully";
echo "<br><br>";
echo "<a href='application.html'>Go back to your Profile page</a>";
?>
