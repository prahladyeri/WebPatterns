/**
* @author Prahlad Yeri
* @copyright MIT license
* @brief Custom javascript code for bootstrap template.
* @date 28-01-2015
*/

$(document).ready(function() {
	//DEFINE VARS
	if (typeof angular != 'undefined') {
		window.angularScope = angular.element('body').scope(); //for angularjs
		//fill the menus in navbar dynamically.
		//type = angularScope.main.auth.type;
	}
	
	// menus = ['Home', 
		// {'Tools':[new MenuItem('Menu Builder',"menubuilder", "tags"), new MenuItem('Diagnostics',"diagnostics","asterisk")]},
		// ,  "About", "Contact",
	// ];
	
	json = $.get("/static/js/menu.json", function(data, status){
			// var menus = [];
					// menus.push({'Professor':[
		      		// new MenuItem('Find Students',"findstudents","search"), new MenuItem('My Jobs',"myjobs","usd"), new MenuItem("-") ,//'Students Past Jobs and Performance'
		      		// new MenuItem('Messages'), new MenuItem('Inbox',"inbox","envelope"), new MenuItem('Sent',"sent","send"), new MenuItem('Archived',"archived","cloud-upload"),
		      		// ]});
			menus = JSON.parse(data);

			
			constructMenu(menus, $('.main-menu'));
			//animateMenus();
		});
	
	//constructMenu(menus, $('.main-menu'));
	//createView('home');


});


// ADD SLIDE/FADE ANIMATION TO DROPDOWN //
function animateMenus() {
	$('.main-menu li.dropdown, .dropdown.login, .dropdown.register')
	.on('show.bs.dropdown', function(e) {
		//alert('slideDown');
	    $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(381); //fadeIn();    slideDown()
	  })
	.on('hide.bs.dropdown', function(e) {
		//alert('slideUp');
	    $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(200); //fadeOut();  slideUp();
	  });
}