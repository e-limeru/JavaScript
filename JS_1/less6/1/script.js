	var upLink = document.getElementById("up")
	var downLink = document.getElementById("down")
	var gallery = document.getElementsByClassName("sm_img");
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
	
	}