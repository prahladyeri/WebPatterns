 /**
* @author: Prahlad Yeri
* @copyright: MIT License
* @brief: Angular app main module.
* @date: 29-01-2015
*/
angular.module('bootPlatesApp').controller("diagnosticsController", ['$scope','$location', '$route', '$routeParams', 'dataService', 'delay', function($scope, $location, $route, $routeParams, dataService, delay) {
	console.log('diagnosticsController starts');
	console.log("bt ver: " + delay.bootstrapVersion);
	var vm = this;
	//console.log("title: " + $scope.title);
	vm.title = $route.title;
	vm.version = dataService.version;
	vm.angularVersion = angular.version.full.toString();
	vm.bootstrapVersion = delay.bootstrapVersion;
	console.log('diagnosticsController ends');
}]);