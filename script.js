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

