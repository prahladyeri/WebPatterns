# This *pattern* works!

Congratulations! By using this pattern you have started a new journey towards kick-starting your web application.
Before using this pattern, make sure that it matches your needs. You can browse a variety of patterns at https://github.com/prahladyeri/WebPatterns.

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