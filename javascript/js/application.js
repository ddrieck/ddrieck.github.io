$(document).ready(function(){
	alert("Page Loaded!");
	//$(".product").find("img").fadeOut(2000);
	$(".details").on("click", function(){
		$(this).siblings().show();
	});
	$(".eu").hide();
	$(".eu-toggle").on("click", function(){
		$(".eu").show();
		$(".us").hide();
	})
	$(".us-toggle").on("click", function(){
		$(".us").show();
		$(".eu").hide();
	})
});