angular.module('bootPlatesApp').service('dataService', ['$timeout', function($timeout){
	console.log("dataSerivce starts");
	var self = this;
	self.version = 1.3;
	self.dbversion = 1.0;
	
	self.initialize= function () {
	};
	
	console.log("dataSerivce ends");
}]);