app.controller("mainController" , function ($scope, $state, $http ) {
	//if user is not logged in 
	// if (localStorage['user']===undefined){
	// 	$state.go("Login");
	// }

// to check for log in 
        $http.post("checkforlogin.php").success(function(response){
             
                    
                    if(response.status=="admin")
                    {
                    $state.go("Administrator");
                    }
                else if(response.status=="wrong")
                    {
                    $state.go("Login");
                    }           
                 
                             
}).error(function(error){
    console.error(error);
});


//end of check 

    $scope.reloaddetails = function() {
$http.get("ajax.php")
    .success(function(data){
        $scope.data = data;
    })
    .error(function() {
        $scope.data = "error in fetching data";
    });

        
    }

	$scope.logOut= function () {
		
		$http.post("logout.php").success(function(response){
			console.log(response);
			$state.go("Login");

		}).error(function(error){
			console.error(error);
		});

		
	};

	$scope.updateUser = function () {
                
            ($("#unid").val());
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

                
                $http.post("edituser.php",datamain).success(function(response){
                    console.log(response);
                    //localStorage.setItem("user", JSON.stringify({user: response[0].username}));
                 // location.reload();
                 alert("User information has been updated");
                 // location.reload();
                 $scope.reloaddetails();
                 //$state.go("Login");

                }).error(function(error){
                console.error(error);
                });

            };

	$http.get("ajax.php")
	.success(function(data){
		$scope.data = data;
	})
	.error(function() {
		$scope.data = "error in fetching data";
	});


});