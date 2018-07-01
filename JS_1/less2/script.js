// 1 задание
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 // сначала уделичивается на 1 'a', затем присваевается к 'c'
d = b++; alert(d); // 1 // 'd' сначала присваевает 'b', затем 'b' увеличивается на 1
c = (2+ ++a); alert(c); // 5 // сначала уделичивается на 1 'a' и = 3, затем прибавляется к 2
d = (2+ b++); alert(d); // 4 // сначала 'b' прибавляется к 2, затем 'b' увеличивается на 1
alert(a); // 3
alert(b); // 3
*/

// 2 задание
/*
var a = 2;
var x = 1 + (a *= 2);

alert(x); // x=5 // x = 1 + (a * 2) // a = 4
*/

// 3 задание
a=undefined;
var a = +prompt('введите А', a), b = +prompt('введите B', b), c;

if (a>0 && b>0) {
	alert(a-b);
} else if (a<0 && b<0) {
	alert(a*b);
} else {
	alert(a+b);
}

// 4 задание 
a=undefined;
var a = +prompt('от 0 до 15', a)

switch(a) {
	case 0:
		alert(a++);
	case 1:
		alert(a++);
	case 2:
		alert(a++);
	case 3:
		alert(a++);
	case 4:
		alert(a++);
	case 5:
		alert(a++);
	case 6:
		alert(a++);
	case 7:
		alert(a++);
	case 8:
		alert(a++);
	case 9:
		alert(a++);
	case 10:
		alert(a++);
	case 11:
		alert(a++);
	case 12:
		alert(a++);
	case 13:
		alert(a++);
	case 14:
		alert(a++);
	case 15:
		alert(a++);
		break;
	default:
			alert('Ошибка');

}

// 5 задание

function summ(x,z) {
	return(x+z);
}

function razn(x,z) {
	return(x-z);
}

function proiz(x,z) {
	return(x*z);
}

function del(x,z) {
	return(x/z);
}


var arg1 = +prompt('Первый аргумент', arg1), 
	arg2 = +prompt('второй аргумент', arg2), 
	operation = prompt('summ - сумма\nrazn - разность\nproiz - произведение\ndel - деление', operation);



// 6 задание

function mathOperation(arg1, arg2, operation) {
	switch(operation) {
		case 'summ':
			alert(summ(arg1,arg2));
			break
		case 'razn':
			alert(razn(arg1,arg2));
			break
		case 'proiz':
			alert(proiz(arg1,arg2));
			break
		case 'del':
			alert(del(arg1,arg2));
			break
		default:
			alert('Ошибка');
	}
}

mathOperation(arg1, arg2, operation);

// 7 задание

null > 0; //false
null == 0; //false
null >= 0; //true

// 8 задание

function power(val, pow) {
  if (pow != 1) {
    return val * power(val, pow - 1);
  } else {
    return val;
  }
}

alert( power(5, 2) ); 