function boardCreate () {
	chars = 'ABSDEFGH', content='', contentItem='';
	itemBoad = document.getElementById('board');
	chars1 = document.createElement("div");
	itemBoad.appendChild(chars1);
	chars1.setAttribute("id", "chars");
	charsLine = document.getElementById('chars');
	for (i=0;i<chars.length;i++) {
		content = document.createElement("div");
		content.innerText += chars[i];
		charsLine.appendChild(content);
	}
	for (i=0;i<=7;i++) {
		for (j = 0; j <= 9; j++) {
			contentItem = document.createElement("div");
			itemBoad.appendChild(contentItem);
			if (j==0 || j==9) {
				contentItem.classList.add("num");
				contentItem.innerText = i;
			} else {
				if (i%2!=0 && j%2 != 0) {
					contentItem.classList.add("item", "black");
				} else if (i%2!=0 && j%2 == 0){
					contentItem.classList.add("item", "white");
				} else if (i%2==0 && j%2 != 0) {
					contentItem.classList.add("item", "white");
				} else {
					contentItem.classList.add("item", "black");
				}
			}
		}
	}
	chars2 = document.createElement("div");
	itemBoad.appendChild(chars2);
	chars2.setAttribute("id", "chars2");
	charsLine2 = document.getElementById('chars2');
	for (i=0;i<chars.length;i++) {
		content = document.createElement("div");
		content.innerText += chars[i];
		charsLine2.appendChild(content);
	}
}

boardCreate ();