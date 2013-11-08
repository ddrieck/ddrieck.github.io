$(document).ready(function(){
	alert("Page Loaded!");
	//$(".product").find("img").fadeOut(2000);
	$(".details").on("click", function(){
		$(this).parent().find(".description").slideToggle();
	});
	$(".eu-toggle").on("click", function(){
		$(".eu").show();
		$(".us").hide();
	})
	$(".us-toggle").on("click", function(){
		$(".us").show();
		$(".eu").hide();
	})
	$(".addtocart").on("click", function(){
		alert("Thanks for adding the shirt.")
	})
});