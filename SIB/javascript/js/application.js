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

//Javascript code for cart logic
var cart = [];

$(".addtocart").on("click", function(){
	var productClass = $(this).closest(".product");
	var nameOfProduct = productClass.find("h2").text();
	var skuOfProduct = productClass.data("sku");	
	if ($(".us").is(":visible")){
		var priceOfProduct = productClass.find(".us").text();
	} else {
		var priceOfProduct = productClass.find(".eu").text();
	}

	priceOfProduct = priceOfProduct.slice(1,3);
	priceOfProduct = parseFloat(priceOfProduct);
	
	var cartItem = { name: nameOfProduct,
                 	sku: skuOfProduct, 
                 	price: priceOfProduct, 
                 	quantity: 1 };

	cart.push(cartItem);

	function refreshCart(){
		total = 0;
		for(var i = 0; i < cart.length; i++) {
	 			var cartItem = cart[i];
	 			total += cartItem.price;
			}
		}	

	refreshCart(); // we need to write this.*/
	
	if ($(".us").is(":visible")){
		$(".cart-total").text("Total $" + total);
	} else {
		$(".cart-total").text("Total \u20AC" + total);
	}
});


}); //end of jquery