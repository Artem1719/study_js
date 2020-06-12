'use strict';
//let question=confirm('Тебе есть 18 лет?');
//let question2=+prompt('Сколько тебе лет?', '18');
//console.log('question: ', question);
//console.log(typeof question2);

let money = 30000;
console.log(typeof money);
let income = 'frilance';
console.log(typeof income);
let addExpenses = 'Internet, Mobile connection, Communal expenses';
let deposit = true;
console.log(typeof deposit);
let mission = 200000;
let period = 12;
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
console.log(addExpenses.toLowerCase().split(', '));
let budgetDay = money/30;
console.log('budgetDay: ', budgetDay); 

money=+prompt('Ваш месячный доход?'); 
console.log('money:', money);
addExpenses=prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
console.log('addExpenses: ', addExpenses);
deposit=confirm('Есть ли у вас депозит в банке?');
console.log('deposit: ', deposit);

let expenses1=prompt('Введите обязательную статью расходов?');
console.log('expenses1: ', expenses1);
let expenses2=prompt('Введите обязательную статью расходов?');
console.log('expenses2: ', expenses2);
let amount1=parseFloat(prompt('Во сколько это обойдется?'));
console.log('amount1: ', amount1);
let amount2=parseInt(prompt('Во сколько это обойдется?'));
console.log('amount2: ', amount2);