'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,

    start = function() {
        do {
            money = prompt('Ваш месячный доход?', 50000);
        }
        while(!isNumber(money)); 
    };
start();

let appData = {
    income: {},  //Доп. доходы
    addIncome: [], //Доп. доходы
    expenses: {}, //Доп. расходы
    addExpenses: [], //Доп. расходы
    deposit: false,
    mission: 20000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'Internet, Mobile connection, Communal expenses');
            appData.addExpenses = appData.addExpenses.toLowerCase().split(', ');
            appData.deposit=confirm('Есть ли у вас депозит в банке?', true);
            for (let i = 0; i < 2; i++){
            let amount,
                consumption = prompt('Введите обязательную статью расходов?' , 'еда');
                do {
                    amount = +prompt('Во сколько это обойдется?', 10000);
                }
                while(!isNumber(amount));
                appData.expenses[consumption] = amount;
        }
    },
    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    return appData.expensesMonth;
    },
    getBudget: function() {
        return money - appData.expensesMonth;
    },
    getTargetMonth: function() {
        return Math.ceil(appData.mission/appData.budgetMonth);
    },
    getStatusIncome: function() {
        if (appData.budgetDay>=1200) {
            return('У вас высокий уровень дохода');
        } else if (600<=appData.budgetDay && appData.budgetDay<1200) {
            return('У вас средний уровень дохода');
        } else if (0<=appData.budgetDay && appData.budgetDay<600) {
            return('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay<0) {
            return('Что то пошло не так');
        }
    }
};
appData.asking();
console.log('appData: ', appData);

console.log('Возможные расходы: ', appData.addExpenses);
console.log(appData.expenses);

appData.getExpensesMonth();
console.log('Обязательные расходы за месяц ', + appData.expensesMonth);

appData.budgetMonth = appData.getBudget();
console.log('Месячный бюджет равен', appData.budgetMonth);

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев');
} 
else console.log('Цель не будет достигнута');

appData.budgetDay = Math.floor(appData.budgetMonth/30);
console.log('Бюджет на день:', appData.budgetDay);

console.log(appData.getStatusIncome());

