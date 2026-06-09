// JavaScript Document

//show and hide search bar
$( document ).ready(function() {
	"use strict"
  $(".search").click(function(){
	$(".menu-open").hide();
    $(".search-open").slideToggle('1000');	
  });

  });

//show and hide menu bar
$( document ).ready(function() {
	"use strict"
  $(".menu").click(function(){
	$(".search-open").hide();
    $(".menu-open").slideToggle('1000');	
  });

  });