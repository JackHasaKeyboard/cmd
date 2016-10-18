// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function(){
	$("tr").each(function(){
		$(this).find("td:not(:last):not(:has(code))").addClass("slot");
		$(this).find(".slot:not(:empty)").addClass("key");

		$(this).find(".key:not(:last)").first().css({
			"border-radius": "4px 0 0 4px"
		});

		$(this).find(".key:not(:first)").last().css({
			"border-radius": "0 4px 4px 0"
		});
	});

	$("tbody").has("td:first-child:empty").find("tr").each(function(){
		$(this).find(".slot").first().css({
			"border-top-right-radius": "0",
			"border-bottom-right-radius": "0"		
		});

		$(this).find(".slot").last().css({
			"border-top-right-radius": "4px",
			"border-bottom-right-radius": "4px"		
		});
	});

	$(".key").css({
		"background": "#e9e9e9",
		"text-align": "center",
		"color": "#bcbcbc",
		"border": "1px solid #bcbcbc",
		"border-bottom": "2px solid #bcbcbc",
		"-webkit-touch-callout": "none", 
		"-webkit-user-select": "none",	 
		"-khtml-user-select": "none",		 
		"-moz-user-select": "none",			 
		"-ms-user-select": "none",			 
		"user-select": "none",				
		"min-width":"18px"
	});

	$("td:not(.key)").css({
		"padding-top": "0",
		"padding-bottom": "0"
	});
});
