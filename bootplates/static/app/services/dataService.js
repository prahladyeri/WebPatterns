angular.module('bootPlatesApp').service('dataService', ['$timeout', function($timeout){
	console.log("dataSerivce starts");
	var self = this;
	self.version = 1.2;
	self.initialize= function () {
	};
	
	console.log("dataSerivce ends");
}]);