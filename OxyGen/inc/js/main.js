/*! OxyGen main.js
 *  Copyright  (c) 2015-2016 Bjarne Varoystrand - bjarne ○ kokensupport • com
 *  License: GPL
 *  @author Bjarne Varoystrand (@black_skorpio)
 *  @version 2.1.9
 *  @description Internal functions for OxyGen
 *  http://varoystrand.se | http://kokensupport.com
**/
$(document).ready(function(){function e(){$(window).width()<=540&&($("nav").addClass("mobile"),$(".show").addClass("mobileOpen"))}$("div.update-notifier").animate({top:"100px"},"slow"),$(".up").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1}),$(".show").click(function(){return $("nav li a").not(".k-nav-current").toggle(),$(".show").toggleClass("show-toggled"),!1});var o=$(".amount-check").html();"1"===o&&$("#slideshow_nav").hide(),e(),$(".mobileOpen").click(function(){$("nav.mobile ul").toggle()}),$("#hover").mouseenter(function(){var e=$("main"),o=$("#hover"),s=$("#sitename, #sitename_combi, #logo");e.hasClass("offset")||(e.addClass("offset"),o.addClass("offset"),s.addClass("nameoffset"))}),$("main").mouseenter(function(){$("main").removeClass("offset"),$("#hover").removeClass("offset"),$("#sitename").removeClass("nameoffset"),$("#sitename_combi").removeClass("nameoffset"),$("#logo").removeClass("nameoffset")})}),$(document).on("click",".cover_scroll_link",function(){return $.scrollTo(this.hash,1e3,{easing:"swing"}),!1});
