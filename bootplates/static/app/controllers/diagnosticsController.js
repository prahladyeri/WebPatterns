 /**
* @author: Prahlad Yeri
* @copyright: MIT License
* @brief: Angular app main module.
* @date: 29-01-2015
*/
angular.module('bootPlatesApp').controller("diagnosticsController", ['$scope','$location', '$route', '$routeParams', 'dataService', 'modalService', 'delay', function($scope, $location, $route, $routeParams, dataService, modalService, delay) {
	console.log('diagnosticsController starts');
	console.log("bt ver: " + delay.bootstrapVersion);
	var vm = this;
	//console.log("title: " + $scope.title);
	vm.title = $route.title;
	vm.version = dataService.version;
	vm.angularVersion = angular.version.full.toString();
	vm.bootstrapVersion = delay.bootstrapVersion;
	
	//START: Show a demo dialog
	var modalOptions = {
		closeButtonText: 'Cancel Me',
		actionButtonText: 'Okay Me',
		headerText: 'Demo Dialog Button',
		bodyText: 'This is a dummy dialog shown from diagnosticsController for your reference.'
	};
	
	this.showTheDialog = function(){
		modalService.show({}, modalOptions);
	}
	//END: Show a demo dialog
	
	console.log('diagnosticsController ends');
}]);