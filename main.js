'use strict';

let money;

let isNumber = function (n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function(){
    do{
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));
};
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    period: 12,
    budjet: money,
    budgetDay: 0,
    budgetMonth : 0,
    expensesMonth: 0,
    asking: function(){

        if(confirm('Есть ли у вас дополнительный заработок?')){
            let itemIncome, cashIncome;
            do{
                itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'таксую');
            } while (isNumber(itemIncome) || itemIncome.trim()==='');

            do{
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            }while(!isNumber(cashIncome));

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        
        
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if (appData.deposit){
            appData.getInfoDeposit();
        }
        for(let i = 0; i < 2; i++){
            let ask1, ask2;
            do{
                ask1 = prompt('Введите обязательную статью расходов?');
            } while(isNumber(ask1) || ask1.trim()==='');
            do{
                ask2 = prompt('Во сколько это обойдется?');
            } while (!isNumber(ask2));
            appData.expenses[ask1] =  ask2;
            
        }
    },
    getExpensesMonth: function(){
        for(let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
        }
        console.log('расходы за месяц: ' + appData.expensesMonth);
    },
    getBudjet: function(){
        appData.budgetMonth =  appData.budjet - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;

    },
    getTargetMonth: function(){
        return Math.ceil(appData.mission / Math.floor(appData.budgetMonth));
    },
    getStatusIncome: function(){
        if (appData.budgetDay > 1200) {
            console.log('у вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200){
            console.log('У вас средний уровень дохода');    
        } else if (appData.budgetDay < 600 && appData.budgetDay >= 0){
            console.log('К сожалению, ваш уровень дохода - ниже среднего');    
        } else {
            console.log('Что-то пошло не так');
        }
    },
    getInfoDeposit: function(){
        if (appData.deposit){
            do{
                appData.percentDeposit = prompt('Каков годовой процент?', 10);
            } while(!isNumber(appData.percentDeposit));
            
            do{
                appData.moneyDeposit = prompt('Какова сумма депозита', 10000);
            } while (!isNumber(appData.moneyDeposit));
            
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudjet();

if (appData.getTargetMonth() <= 0){
    console.log('Цель не будет достигнута');
} else {
    console.log('цель будет достигнута за ' + appData.getTargetMonth() + ' месяцев');
}

appData.getStatusIncome();

console.log('Наша программа включает в себя данные: ');

for(let key in appData){
    console.log(key + ':' + appData[key]);
}

let string = '';
for (let str of appData.addExpenses){
    str = str.trim();
    str = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    string += str + ', ';
    
}
console.log(string.substring(0, string.length-2));


// console.log(appData.addExpenses.join(', '));









