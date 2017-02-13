app.controller('loginController', [ '$scope', '$http' , '$state' , function($scope, $http , $state){

	$scope.signUpInfo= {
		username: undefined ,
		password: undefined 
	}	

	$scope.loginInfo= {
		username: undefined ,
		password: undefined 
	}


	$scope.signUserUp = function () {

		var data = {
			username: $scope.signUpInfo.username,
			password: $scope.signUpInfo.password

		}

		$http.post("signup.php",data).success(function(response){
			console.log("signup info send");
	 	 	alert("Yourrr SignUp Information has been sent to the admin for approval");
	 	

	 }).error(function(error){
	 	console.error(error);
	 });

	};

	$scope.loginUser = function () {

		var data = {
			username: $scope.loginInfo.username,
			password: $scope.loginInfo.password

		}

		$http.post("login.php",data).success(function(response){
			 
					if(response.status=="user")
					{
					console.log("User Login");
					$http.post("save.php",data).success(function(response){
			 		console.log(response);
			 		}).error(function(error){
			 		console.log(error);
			 		});
	 				$state.go("Application");
					}
				else if(response.status=="admin")
					{
					console.log("Administrator login");
					$http.post("saveadmin.php",data).success(function(response){
			 		console.log(response);
			 		}).error(function(error){
			 		console.log(error);
			 		});
	 				$state.go("Administrator");
					}
				else if(response.status=="wrong")
					{
					alert("The username or password is incorrect");
					$state.go("Login");
					}
				else if(response.status=="adminin")
					{
					alert("A user is already logged in , please logout before attempting to log in again");
					$state.go("Login");
					}
				else if(response.status=="usernin")
					{
					alert("A user is already logged in , please logout before attempting to log in again");
					$state.go("Login");
					}				
				 	
				 
						   
								
				 
}).error(function(error){
	console.error(error);
});


};

}]); 

