'use strict';

let money = +prompt('Ваш месячный доход?', 30000);
//console.log(typeof money);
//console.log('Ваш месячный доход:', money);
let income = 'frilance';
//console.log(typeof income);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'Internet, Mobile connection, Communal expenses');
console.log('Возможные расходы ', addExpenses);
let deposit=confirm('Есть ли у вас депозит в банке?', true);
//console.log(typeof deposit);
//console.log('deposit: ', deposit);
let mission = 200000;
let period = 12;

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
console.log(addExpenses.toLowerCase().split(', '));

let expenses1=prompt('Введите обязательную статью расходов?');
console.log('Статья расходов 1: ', expenses1);
let amount1=parseFloat(prompt('Во сколько это обойдется?'));
console.log(expenses1 + ' : ' + amount1);
let expenses2=prompt('Введите обязательную статью расходов?');
console.log('Статья расходов 2: ', expenses2);
let amount2=parseInt(prompt('Во сколько это обойдется?'));
console.log(expenses2 + ' : ' + amount2);

let budgetMonth=money - amount1 - amount2;
console.log('Месячный бюджет равен', budgetMonth);

console.log('Цель будет достигнута за ' + Math.ceil(mission/budgetMonth) + ' месяцев');

let budgetDay = Math.floor(budgetMonth/30);
console.log('Бюджет на день:', budgetDay);
//Условие
let getStatusIncome = function() {
    if (budgetDay>=1200) {
        return('У вас высокий уровень дохода');
    } else if (600<=budgetDay && budgetDay<1200) {
        return('У вас средний уровень дохода');
    } else if (0<=budgetDay && budgetDay<600) {
        return('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay<0) {
        return('Что то пошло не так');
    }
};
console.log(getStatusIncome());