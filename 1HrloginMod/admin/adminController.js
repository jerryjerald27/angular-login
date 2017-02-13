app.controller('adminController', ['$scope', '$http', '$state' , 'filterFilter' , function ($scope, $http ,$state ,filterFilter) {


//to check if user is logged in 

    // to check for log in 
 $http.post("checkforlogin.php").success(function(response){
                              
                    if(response.status=="user")
                    {
                    $state.go("Application");
                    }   
                 else if(response.status=="wrong")
                    {
                    $state.go("Login");
                    }           
                 
                             
}).error(function(error){
    console.error(error);
});


//end of check

// load the approve table     
   
$scope.loadaprove = function () {
    
    $http.get("admin/ajax.php")
    .success(function(data){
        $scope.approvedData = data;
    })
    .error(function() {
        $scope.datas = "error in fetching data";
    });

    $http.get("admin/countapprove.php").success(function(data){ 
     $scope.countapprove = data; 
     if($scope.countapprove==0)
        { $scope.flagapprove = false;
            // $scope.showapprove();
        }
        else { $scope.flagapprove = true;
        }
    }).error(function() 
    {
        $scope.data = "error in fetching data";
    });
    
};

// load the main table 

$scope.search = {};

$scope.loadmain = function () {
    
    $http.get("admin/users.php")
    .success(function(data){
        $scope.userData = data;
    })
    .error(function() {
        $scope.datas = "error in fetching data";
    });
    
    // pagination test start 
    
    $http.get("admin/count.php").success(function(data){ 
     $scope.count = data; 
     //console.log($scope.count);
      $scope.currentPage = 1;
      $scope.totalItems = $scope.count;
      $scope.entryLimit = 10; // items per page
      $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
          
      }).error(function() 
      {$scope.data = "error in fetching data";
  });
   

    // pagination controls
 
    


    // $watch search to update pagination
    $scope.$watch('search', function (newVal, oldVal) {
        $scope.filtered = filterFilter($scope.userData, newVal);
        $scope.totalItems = $scope.filtered.length;
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
        $scope.currentPage = 1;
    }, true);

//test ends 


};
   
$scope.loadaprove();
$scope.loadmain();


$scope.aproveUser= function(aid,username,password){
        console.log(aid);
        $http({
            url: "admin/approve.php",
            method: "POST",
            data: {
                data: aid ,
                username: username ,
                password: password 
            }
        }).success(function(response) {
            console.log(response);
            $scope.loadaprove();
            $scope.loadmain();
            alert("This user have been approved!");
        }); 

        
        
    };

$scope.removeUser= function(aid){
        $scope.removeaid = aid;
        console.log($scope.removeaid);
        $http({
            url: "admin/remove.php",
            method: "POST",
            data: {
                data: aid
            }
        }).success(function(response) {
            console.log(response);
            $scope.loadaprove();
            alert("User has been denied!");
        }); 
        
        
    };


$scope.showapprove = function (){
    $("#approvediv").toggleClass('hidden row');
    };


        
$scope.editInfo= {
        unid: undefined ,
        unusername: undefined,
        unpassword: undefined ,
        unname: undefined ,
        ungender: undefined ,
        unaddress: undefined ,
        unphone: undefined ,
        unemail: undefined ,
        unbloodgroup: undefined ,
        unjob: undefined 
   }


$scope.removeUserMain= function(id){
        $scope.deleteaid = id;
        console.log($scope.deleteaid);

        $http({
            url: "admin/removemain.php",
            method: "POST",
            data: {
                data: id
            }
        }).success(function(response) {
            console.log(response);
            alert("User has been deleted");
            $scope.loadmain();
        }); 
        
        
   };


    $scope.editUser= function(id,username,password,name,gender,address,phone,email,bloodgroup,job){
        $scope.editaid = id;

        $("#unid").val(id);
        $("#unusername").val(username);
        $("#unpassword").val(password);
        $("#unname").val(name);
        $("#ungender").val(gender);
        $("#unaddress").val(address);
        $("#unphone").val(phone);
        $("#unemail").val(email);
        $("#unbloodgroup").val(bloodgroup);
        $("#unjob").val(job);
    };



    $scope.updateUser = function () {

        $("#unid").val();
        $("#unusername").val();
        $("#unpassword").val();
        $("#unname").val();
        $("#ungender").val();
        $("#unaddress").val();
        $("#unphone").val();
        $("#unemail").val();
        $("#unbloodgroup").val();
        $("#unjob").val();


        var datamain = {

            id: $("#unid").val(),
            username: $("#unusername").val(),
            password: $("#unpassword").val(),
            name: $("#unname").val(),
            gender: $("#ungender").val(),
            address:  $("#unaddress").val(),
            phone:  $("#unphone").val(),
            email:  $("#unemail").val(),
            bloodgroup:  $("#unbloodgroup").val(),
            job:  $("#unjob").val()

        }


        $http.post("admin/editmain.php",datamain).success(function(response){
            console.log(response);
            alert("User information has been updated");
            $scope.loadmain();
        }).error(function(error){
            console.error(error);
        });
    };


    


      $scope.logOut = function (){
        $http.post("logout.php").success(function(response){
            console.log(response);
            $state.go("Login");

        }).error(function(error){
            console.error(error);
        });

        
      }


}]); 
