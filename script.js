'use strict';


let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 'frilance',
    addExpenses,
    deposit, 
    mission = 200000,
    period = 12;

let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while(!isNumber(money)); 
};
start();

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'Internet, Mobile connection, Communal expenses');
deposit=confirm('Есть ли у вас депозит в банке?', true);

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Возможные расходы: ', addExpenses);
console.log(addExpenses.toLowerCase().split(', '));

/*let expenses1=prompt('Введите обязательную статью расходов?', 'Internet');
let amount1=parseFloat(prompt('Во сколько это обойдется?', 2500));
let expenses2=prompt('Введите обязательную статью расходов?', 'Mobile connection');
let amount2=parseInt(prompt('Во сколько это обойдется?' , 5000));
*/
let expenses = [];

function getExpensesMonth() {
let sum=0;
for (let i = 0; i < 2; i++){
        let amount;
        expenses[i] = prompt('Введите обязательную статью расходов?');
        do {
            amount = prompt('Во сколько это обойдется?');
        }
        while(!isNumber(amount)); 
        sum += +amount;
}
console.log(expenses);
return sum;
};
let expensesAmount = getExpensesMonth();
console.log('Обязательные расходы за месяц ', + expensesAmount);

function getAccumulatedMonth() {
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();
console.log('Месячный бюджет равен', accumulatedMonth);

function getTargetMonth() {
return Math.ceil(mission/accumulatedMonth);
};

if (getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + getTargetMonth() + ' месяцев');
} 
else console.log('Цель не будет достигнута');


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
