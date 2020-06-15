'use strict';

let money = +prompt('Ваш месячный доход?', 30000);
let income = 'frilance';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'Internet, Mobile connection, Communal expenses');
let deposit=confirm('Есть ли у вас депозит в банке?', true);
let mission = 200000;
let period = 12;

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Возможные расходы: ', addExpenses);
console.log(addExpenses.toLowerCase().split(', '));

let expenses1=prompt('Введите обязательную статью расходов?', 'Internet');
let amount1=parseFloat(prompt('Во сколько это обойдется?'));
let expenses2=prompt('Введите обязательную статью расходов?', 'Mobile connection');
let amount2=parseInt(prompt('Во сколько это обойдется?'));

function getExpensesMonth() {
return amount1 + amount2;
};
console.log('Обязательные расходы за месяц ', getExpensesMonth(amount1,amount2));

function getAccumulatedMonth() {
    return money - amount1 - amount2;
};

let accumulatedMonth = getAccumulatedMonth(money,amount1,amount2);
console.log('Месячный бюджет равен', accumulatedMonth);

function getTargetMonth() {
return Math.ceil(mission/accumulatedMonth);
};
console.log('Цель будет достигнута за ' + getTargetMonth(mission,accumulatedMonth) + ' месяцев');

let budgetDay = Math.floor(accumulatedMonth/30);
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