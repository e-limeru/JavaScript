// Задание 1
var digit = {}

var a = prompt('число от 0 до 999');

if (parseInt(a)>999 && parseInt(a)<0) {
	

}

a = a.split("");

if (a.length == 3) {
	digit.hund = a[0];
	digit.ten = a[1];
	digit.unit = a[2];
} else if (a.length == 2) {
	digit.ten = a[0];
	digit.unit = a[1];
} else if (a.length == 1) {
	digit.unit = a[0];
} else console.log("Ошибка");

console.log(digit);