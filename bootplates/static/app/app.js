/**
* @author: Prahlad Yeri
* @copyright: MIT License
* @brief: Angular app main module.
* @date: 29-01-2015
*/
var app = angular.module("bootPlatesApp",
	['ngRoute','ui.bootstrap']);
	
app.config(['$routeProvider', function($routeProvider) {
	var thepath = '/static/app/views/';
	$routeProvider
		.when("/", {
			redirectTo: "/home"
		})
		.when("/home", {
			controller: "homeController",
			controllerAs: 'vm',
			templateUrl: thepath + 'home.html',
			title: "Home"
		})
		.when("/diagnostics", {
			controller: "diagnosticsController",
			controllerAs: 'vm',
			templateUrl: thepath + 'diagnostics.html',
			title: "Diagnostics",
			resolve: {
						delay: function($q, $timeout) {
							var deferred=$q.defer();
							$.get("/static/css/bootstrap.min.css", function (data) {
								$timeout(function() {
									$q.bootstrapVersion = data.match(/v[.\d]+[.\d]/);
									console.log("fetched bt version: " + $q.bootstrapVersion);
									deferred.resolve({'bootstrapVersion':  $q.bootstrapVersion});
									//},3000);
								//TODO: Broadcast that variables are fetched
								}, 100);
							});
							//return $q.defer();
							//return;
							return deferred.promise;
						}
					}
		})
		.when("/notfound", {
			title: "404 - Not Found",
			templateUrl: thepath + "notfound.html"
		})
		.when("/alpha", {
			title: "Alpha View - Modify as you please",
			templateUrl: thepath + "alpha.html"
		})
		.when("/beta", {
			title: "Beta View - Modify as you please",
			templateUrl: thepath + "beta.html"
		})
		.when("/gamma", {
			title: "Gamma View - Modify as you please",
			templateUrl: thepath + "gamma.html"
		})
		.otherwise({
			redirectTo: '/notfound',
		})
		;
}]);


app.run(['$rootScope', '$location', 'dataService',
	function ($rootScope, $location, dataService) {
		console.log("app.run starts");
		dataService.initialize();
		//Client-side security. Server-side framework MUST add it's 
		//own security as well since client-based security is easily hacked
		$rootScope.$on("$routeChangeStart", function (event, next, current) {
			if (next && next.$$route && next.$$route.secure) {
				if (!authService.user.isAuthenticated) {
					$rootScope.$evalAsync(function () {
						authService.redirectToLogin();
					});
				}
			}
			
			//if (next && next.$$route && next.$$route.title) 
			//alert(next.$$route.title);
		});
		
		$rootScope.$on("$routeChangeSuccess", function(event, next, current){
			if(next && next.$$route && next.$$route.title) $rootScope.title = next.$$route.title;
		});
		
		console.log("app.run ends");
}]);

app.controller("navbarController", ['$scope','$location', function($scope, $location) {
	var vm = this;
	vm.appTitle = "BootPlates";
}]);
