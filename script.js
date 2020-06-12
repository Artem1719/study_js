'use strict';
//let question=confirm('Тебе есть 18 лет?');
//let question2=+prompt('Сколько тебе лет?', '18');
//console.log('question: ', question);
//console.log(typeof question2);

let money = +prompt('Ваш месячный доход?', 30000);
console.log(typeof money);
console.log('Ваш месячный доход:', money);
let income = 'frilance';
console.log(typeof income);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'Internet, Mobile connection, Communal expenses');
console.log('Возможные расходы ', addExpenses);
let deposit=confirm('Есть ли у вас депозит в банке?', true);
console.log(typeof deposit);
console.log('deposit: ', deposit);
let mission = 200000;
let period = 12;
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
console.log(addExpenses.toLowerCase().split(', '));

let expenses1=prompt('Введите обязательную статью расходов?');
console.log('Статья расходов 1: ', expenses1);
let expenses2=prompt('Введите обязательную статью расходов?');
console.log('Статья расходов 2: ', expenses2);
let amount1=parseFloat(prompt('Во сколько это обойдется?'));
console.log('Сумма расходов 1: ', amount1);
let amount2=parseInt(prompt('Во сколько это обойдется?'));
console.log('Сумма расходов 2: ', amount2);

let budgetMonth=money - amount1 - amount2;
console.log('Месячный бюджет равен', budgetMonth);

console.log('Цель будет достигнута за ' + Math.ceil(mission/budgetMonth) + ' месяцев');

let budgetDay = Math.floor(budgetMonth/30);
console.log('Бюджет на день:', budgetDay);
//Условие
if (budgetDay>=1200) {
    console.log('У вас высокий уровень дохода');
} else if (600<=budgetDay && budgetDay<1200) {
    console.log('У вас средний уровень дохода');
} else if (0<=budgetDay && budgetDay<600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay<0) {
    console.log('Что то пошло не так');
}
