// 1 задание
var tC = +prompt('темература по Цельсию'), tF = 0;
tF = (9 / 5) * tC + 32;
alert('темература по Фаренгейту - '+tF);

// 2 задание
var a = 5, b = 3;
a = a+b;
b = a-b;
a = a-b;
alert('a= '+a+' b= '+b);

// 3 задание
var name = 'Василий', admin;
admin = name;
alert(admin);

// 4 задание 
// 1000 + '108' = '1000108'
// т.к. '108' строковое значение то происзходит не сложение, а склеевание


// 5 задание
/*
	По-умолцанию сначала заогужаются скрипты, а потом остальной код, который идет после скрипта.

	Атрибуты async и defer делают загрузку скриптов асинхронными, т.е. скрипты загружаются
	одновременно с документом,

	Отличие между async и defer.
	async - загрузка всех скриптов и документа идет одновременно,
	defer - загрузка документа идет одновременно со скриптом, но скрипты выполняются последовательно

	async. что бы не ждать загрузку большого скрипта, пока идет загрузка скрипта, 
	уже подкгрузиться HTML документ.

	drfer используется при связанных скриптах, когда один без другого работать не будет,
	поэтому не обходимо дождаться загрузку первого скрипта.
*/
