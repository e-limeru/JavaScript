// 1 Задание
document.write('1 Задание<br><br>');

var n = 2;

function proverka(n) {
	var i = 2;
	while (i < n) {
		if (n % i == 0) {
			return false;
		}
		i++;
	}
	return true;
}


while (n<=100) {
	if (proverka(n)) {
		document.write(n + ', ')
	}
	n++;
}



// 2 задание
document.write('<br><br>2 Задание<br><br>');
var a = 0, znach = '';
do {
	
	if (a==0) {
		znach = 'Ноль';
	} else if (a%2==0) {
		znach = 'Четное число';
		
	} else {znach = 'Не четное число';}
	document.write(a+' - '+znach+'<br>');
	a++;
} while (a<=10);

// 3 Задание 
document.write('<br><br>3 Задание<br><br>');

for(var n = 0; n < 10; document.write(n++ +', ')) {}
	

// 4 задание
var x = 'x';
for (var i = 0; i <= 20; i++) {
	x += "x";
	console.log(x);
}
