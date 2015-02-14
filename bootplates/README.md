# This pattern works!

Congratulations! By using this pattern you have started a new journey towards kick-starting your web application.
Before using this pattern, make sure that it matches your needs. You can browse a variety of patterns at the [github repo](https://github.com/prahladyeri/WebPatterns).

## Pattern Details

`Pattern name: /bootplates`
`Requirements: bootstrap~3.0 angularjs~1.2.6 angular-ui-bootstrap~0.12.0`

This Template contains boilerplate code for creating an `angularjs` bootstrap app. Credit goes to the [Angular-ui](http://angular-ui.github.io/bootstrap/) Team for providing the essential dialogService to integrate `twitter-bootstrap` dialogs with `angularjs`.

## How To use this Pattern

The folder structure for this pattern is as follows:

	/index.html			# Main startup file
	/static/			# Contains all static folders
	/app/				# angularjs app folder
	/app/controllers	# angular controllers
	/app/services		# angular services
	/app/views			# angular views
	/app/app.js			# main angularjs app
	/css/				# contains twitter-bootstrap stylesheet and a custom.css stylesheet for this pattern
	/fonts/				# FontAwesome fonts
	/js/				# Javascript for this pattern (custom.js) and a menu.json for static menus
	/lib/				# Angular and other library scripts.
	
## How to edit menus

The `twitter-bootstrap` navigation menus for this pattern are easily editable. Just edit the `json` file `/js/menus.json` file that specifies the menu structure for this pattern:

	["Home", 
			{"Tools":[
				{"text": "Group-1", "link": "", "icon": ""}, 
				{"text": "Alpha View", "link": "alpha", "icon": "tags"}, 
				{"text": "-", "link": "", "icon": ""}, 
				{"text": "Group-2", "link": "", "icon": ""}, 
				{"text": "Beta View", "link": "beta", "icon": "tags"}, 
				{"text": "Gamma View", "link": "gamma", "icon": "tags"}, 
				{"text": "Diagnostics","link": "diagnostics", "icon": "asterisk"}]},
			"About", "Contact"]
			
This `json` structure is pretty straightforward. The main menu is represented by an array where each item is either:

- A `String` (for top level menus like Home, etc.). The link is generated automatically, in this case `/home`.
- OR a `MenuItem` which is basically a Javascript object. It has only three properties:
	- `text`: The text being displayed on the menu link or group, OR `-` for seperator.
	- `link`: The actual link or `href` attribute. Both absolute (`http://google.com`) and relative (`home`) urls are fine. Empty string for group item or separators.
	- `icon`: The `Glyphicon` name for the icon font-icon needed before the menu text, set an empty string if no icon is needed. For example, setting `asterisk` will add a `<span>` element with class `glyphicon glyphicon-asterisk` before the menu.
	
## How to set angular `controllers`, `views` and `services`:

Looking at the folder structure, you will know where to find various angular code components in this pattern. The pattern comes with two example controllers:

 - `diagnosticsController`: This controller is used to display a simple web page showing twitter-bootstrap and angular version numbers:
 
	 angular.module('bootPlatesApp').controller("diagnosticsController", ['$scope','$location', '$route', '$routeParams', 'dataService', 'delay', function($scope, $location, $route, $routeParams, dataService, delay) {
		console.log('diagnosticsController starts');
		console.log("bt ver: " + delay.bootstrapVersion);
		var vm = this;
		vm.title = $route.title;
		vm.version = dataService.version;
		vm.angularVersion = angular.version.full.toString();
		vm.bootstrapVersion = delay.bootstrapVersion;
		console.log('diagnosticsController ends');
	}]);
	
 - `homeController`: Controller for the display of home page.
 - `authController`: Controls user management features - Login/Logout/Register.
 
The corresponding views are `diagnostics.html` and `home.html`. Three other views called `alpha.html`, `beta.html` and `gamma.html` come bundled with the pattern as empty place-holders. These views are directly displayed by the routing engine and no controller is defined. You can however, edit the app.js and change the entire routing process as you please:

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
		
## How do I handle backend data?
		
## How do I implement user management (Login/Logout/Register)

## How do I implement an additional dialog.