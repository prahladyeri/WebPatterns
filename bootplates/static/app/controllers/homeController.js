 /**
* @author: Prahlad Yeri
* @copyright: MIT License
* @brief: Angular app main module.
* @date: 29-01-2015
*/
//, 'authService'
angular.module("bootPlatesApp").controller("homeController", ['$scope','$location', '$route', '$routeParams', function($scope, $location, $route, $routeParams) {
	var vm = this;
	this.showIt = function() {
		var modalOptions = {
			closeButtonText: "Cancel",
			actionButtonText: "Okay",
			headerText: "Angular Modal",
			bodyText: "Fooo.. Body"
		};
		modalService.showModal({}, modalOptions).then(function(result) {
			console.log("okay pressed");
		},
		function(result){
			console.log("cancel pressed");
		}
		);
	}
}]);