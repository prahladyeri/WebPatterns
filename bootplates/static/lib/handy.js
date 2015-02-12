/**
* @author Prahlad Yeri
* @copyright MIT license
* @brief Custom javascript library for doing misc things.
* @date 28-01-2015
*/

/**
* @brief Constructor pattern for menu item.
* @param text Text to display on menu. "-" for divider.
* @param link Navigation link menu. "" for group menu.
* @param icon glyphicon class. "" for none.
* @return new MenuItem object.
*/
function MenuItem(text, link="", icon="") {
	this.text = text;
	this.link = link;
	this.icon = icon;
}

/**
* @brief Reconstructs the bootstrap navigation menu.
* @param menus Array containing Strings(for main menus) or Dictionary of String:MenuItems(for submenus).
* @param container The navbar container represented by the .navbar-nav class.
* @return null
*/
function constructMenu(menus, container) {
	container.html('');
	buildMenu(menus, container);
}

/**
* @brief Performs the actual dirty work of building the menu items.
* @param arr text Array of MenuItem for filling.
* @param parentEl Used for recursion. Pass the navbar node initially.
*/
function buildMenu(arr, parentEl) {
	arr.forEach(function(root) {
		var li;
		var id;
		
		if ( parentEl.hasClass('navbar-nav'))
			rootLevel=true;
		else
			rootLevel=false;
		
		// This is a menu entry
		if ( typeof root === 'string' ) {
			id = removeSpecialChars(root);
			//li = $('<li></li>').html('<a href="#" onclick="javascript:createView(\'' + id +  '\');">' + root +  '</a>');
			li = $('<li></li>').html('<a href="/#/' + id  + '">' + root +  '</a>');
			parentEl.append(li);
		}
		else if (root.hasOwnProperty('link')) { //dropdown entry   (root instanceof MenuItem)
			console.log('HasownProperty: ' + root.link);
			id = removeSpecialChars(root.text);
			glyph = (root.icon=="" ?  "" : "<span class='glyphicon glyphicon-" + root.icon + "'></span> &nbsp;");
			//if (root.icon !== "") alert('foo');
			
			if (root.text=="-") { //a divider
				li = $('<li class="divider"></li>');
			}
			else if (root.link == "") { //a group entry
				li = $('<li></li>').html('<a style="font-weight:bold;font-style:italic;">' + glyph  +  root.text +  '</a>');
			} 
			else {
				li = $('<li></li>').html('<a href="/#/' + root.link  + '">' + glyph + root.text +  '</a>');
			}
			parentEl.append(li);
		}
		// Or 
		else { //an array. so this is a submenu.
			// Loop over all the keys
			Object.keys(root).forEach(function(child) {
				//li = $('<li></li>').html(child);
				id = removeSpecialChars(child);
				istopmenu = parentEl.hasClass('navbar-nav');
				//li = $('<li class="dropdown' + (istopmenu ? '' : ' dropdown-submenu') + '"></li>').html('<a class="dropdown-toggle" data-toggle="dropdown"  href="/" onclick="javascript:createView(\'' + id +  '\');" aria-expanded="false">' + child + (istopmenu ? '<span class="caret"></span>' : '') + '</a>');
				thref = "#"; //html5 mode
				thref = "javascript:";
				li = $('<li class="dropdown' + (istopmenu ? '' : ' dropdown-submenu') + '"></li>').html('<a class="dropdown-toggle" data-toggle="dropdown"  href="' + thref + '" aria-expanded="false">' + child + (istopmenu ? '<span class="caret"></span>' : '') + '</a>');
				var ul = $('<ul class="dropdown-menu' +  (rootLevel ? ' root-level-menu ' : '') +  '"></ul>');
				
				/*		strContent='<li id="' + strId +  '"  class="dropdown"' + (parentText==''?'':' dropdown-submenu') +  ' ><a class="dropdown-toggle" data-toggle="dropdown" href="#">' + text +  '<span class="caret"></span></a>';
		strContent+= '<ul class="dropdown-menu" role="menu" id="cont' + strId +  '"></ul>';
		strContent+='</li>';
				*/
		 
				// Recursively loop over the array elements 
				buildMenu(root[child], ul);
				li.append(ul);
				parentEl.append(li);
			 });
		}
	});
  }

/**
* @brief Normalize and remove special chars from a string about to be used as a link or href.
*/  
function removeSpecialChars(text)
{
	s = text.toLowerCase();
	s = s.replace("/","");
	s = s.replace("\\","");
	s = s.replace("+","");
	s = s.replace("/","");
	s = s.replace(" ","");
	return s;
}

/**
* @brief Quick way to return the type of an object
*/
function type(obj)
{
	return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}