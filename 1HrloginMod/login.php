<?php
session_start();

 include("connection.php");
 $data = json_decode(file_get_contents("php://input"));
 $password= $data->password;
 $username = $data->username;



unset($userInfo);
unset($adminInfo);

 $userInfo = $db->query("SELECT username FROM users WHERE username = '$username' AND password ='$password'");
 $userInfo = $userInfo->fetchAll();


$obj = new stdClass;
$obj->status = "value";

 

$adminInfo = $db->query("SELECT username FROM admins WHERE username = '$username' AND password ='$password'");
$adminInfo = $adminInfo->fetchAll();


if(isset($_SESSION["adminloggedinid"]))
     {
       $obj->status = "adminin";
       echo json_encode($obj); 
     }
 else if(isset($_SESSION["loggedinid"]))
     {
       $obj->status = "userin";
       echo json_encode($obj); 
     }
     else {
	if (empty($adminInfo)) 
		 {
    	if (empty($userInfo)) 
    		{
    		$obj->status = "wrong";
      		echo json_encode($obj); 
			}
		else 
			{	
			$obj->status = "user";	
			echo json_encode($obj); 
			}
		 }	
else {
	$obj->status = "admin";
	echo json_encode($obj);
}
}


// if (empty($userInfo)) {
    
//   	echo json_encode("wrong"); 
// }
// else {
// 	if ($adminInfo.token!="A") {
//     	echo json_encode("user"); 
// 	}
// 	// else{
// 	// echo json_encode("admin");
// 	// }
// }


?>