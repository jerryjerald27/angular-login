var app = angular.module("mainApp",["ui.router","ui.bootstrap"])

   app.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
    });


app.config(function($stateProvider) {
	$stateProvider
	.state("Login" , { 
		url: "/",
		controller: "loginController",
		templateUrl: "login.html",
		})	

	.state("Application", {
		url: "/app",
		controller: "mainController",
		templateUrl: "application.html"
		})

	.state("Administrator", {
		url: "/admin",
		controller: "adminController",
		templateUrl: "../1HrloginMod/admin/administrator.html"
		})

	});		

 