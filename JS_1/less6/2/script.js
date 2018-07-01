	var products = document.getElementById("productBlock");
	for (var i = 0; i < products.children.length; i++) {
		
		var btn = document.getElementById("btn_"+[i]);
		btn.addEventListener("click", add);
		//console.log(product);
	}

	function add(event) {
		i=event.target.id.split("_")[1];
		
		var product = document.getElementById("product_"+[i]);
		var cart = document.getElementById("cart");
		var newProduct = document.createElement('div');
		newProduct.className = 'product_cart';
		
		var img = document.createElement('img');
		img.className = 'img_cart';
		img.src = product.children[0].src;
		newProduct.appendChild(img);
		img.innerText = product.children[0].innerText;

		var name = document.createElement('div');
		name.className = 'name_cart';
		newProduct.appendChild(name);
		name.innerText = product.children[1].innerText;

		var price = document.createElement('div');
		price.className = 'price_cart';
		newProduct.appendChild(price);
		price.innerText = product.children[2].innerText;



		event = event.target;
		cart.appendChild(newProduct);
		console.log(product);
	}

	/*var gallery = document.getElementsByClassName("sm_img");
	for (var i = 0; i < gallery.length; i++) {
		gallery[i].addEventListener("click", add);
		//upLink.addEventListener("click", up);
	}

	function add(event) {
		var divBigImg = document.getElementById("big_img");
		divBigImg.innerHTML = "";
		var newImg = document.createElement('img');
		event = event.target.id.split("_")[1];
		newImg.src = "img/big/"+event+".jpg";
		newImg.onload = function () {divBigImg.appendChild(newImg);};
    	newImg.onerror = function () {alert('Такой картики нет')};
	
	}*/