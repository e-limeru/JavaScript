var ok, result, money=0;

for (var i = 0; i <= question.length; i++) {
	do {
		ok = false;
		result = prompt(question[i].quest+'\n1. '+question[i].ans1+'\n2. '+question[i].ans2+'\n3. '+question[i].ans3+'\n4. '+question[i].ans4+'\n-1 выход из игры');
		
		if (result == -1) {
			break;
		} else {
			ok = isAnswer(result);
		}
	} while (!ok);

	if (result == -1) {
		break;
	} else if (result != question[i].correct) {
		alert('ответ не верный, Ваш выйгрыш 0 руб.');
		break;
	} else {
		money += question[i].money;
		alert('Ответ верный вы заработали: '+money+' руб');
	}
}

function isAnswer(result) {
    if (isNaN(result) || !isFinite(result)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (result < 1 || result > 4) {
        alert('Варианты ответа 1, 2, 3, 4');
        return false;
    }
    return true;
    
}