<?php
session_start();

$obj = new stdClass;
$obj->status = "value";


 if(isset($_SESSION["adminloggedinid"]))
     {
       $obj->status = "admin";
       echo json_encode($obj); 
     }
 else if(isset($_SESSION["loggedinid"]))
     {
       $obj->status = "user";
       echo json_encode($obj); 
     }
 else 
     {
       $obj->status = "wrong";
       echo json_encode($obj); 
     } 

?>