const Type = {
    BREAKFAST: 1,
    LUNCH: 2,
    DINNER: 3,
    CARWASH: 4
};

ExpenseConfig = {
    Breakfast:{name:'Dinner', overExpenseLimit:2000},
    Lunch:{name:'Lunch', overExpenseLimit:4000},
    Dinner:{name:'Dinner', overExpenseLimit:5000},
    Carwash:{name:'Carwash', overExpenseLimit:undefined}
}

function changeConfig(){
    throw new Error("Not yet implemented");
}