var baseURL = 'http://89.108.65.123';
var idUser = document.querySelector('#idUser');
var btn = document.querySelector('#btn');
var addBtn = document.querySelector('#addBtn');

getUser = function () {
	var xhr = new XMLHttpRequest();
	var id = idUser.value;
	xhr.open('GET', `${baseURL}/user/${id}`, false);
	xhr.send();
	var user = JSON.parse(xhr.responseText);
	var showIdUser = document.querySelector('#showIdUser');

	if (user.name!=undefined && user.email!=undefined && user.age!=undefined) {
		showIdUser.innerHTML = ('Имя: '+user.name+'<br>E-mail: '+user.email+'<br>Возраст: '+user.age);
	} else showIdUser.innerHTML = ('Пользователь не найден');
}
btn.addEventListener('click', getUser);

postUser = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', `${baseURL}/user/`, false);
	var userName = document.querySelector('#userName');
	var userEmail = document.querySelector('#userEmail');
	var userAge = document.querySelector('#userAge');

	var newUser = {
		newName: userName.value,
		newEmail: userEmail.value,
		newAge: userAge.value
	}
	const myData = JSON.stringify(newUser);
	console.log(myData);
	xhr.send(myData);
}
addBtn.addEventListener('click', postUser);

userList = function() {

	var xhr = new XMLHttpRequest();
	var id = 1;
	
	var data='';
	do {
		xhr.open('GET', `${baseURL}/user/${id}`, false);
		xhr.send();
		var user = JSON.parse(xhr.responseText);
		console.log(user);
		var userList = document.querySelector('#userList');
		data+=('Имя: '+user.name+', E-mail: '+user.email+', Возраст: '+user.age+'<br>');
		id++;
	} while (xhr.status === 200);

	userList.innerHTML = data;
}

userList();