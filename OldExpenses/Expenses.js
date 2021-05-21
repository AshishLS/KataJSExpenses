const Type = {
    BREAKFAST: 1,
    LUNCH: 2,
    DINNER: 3,
};

class Expense
{
    constructor(type, amount){
        this.type = type;
        this.amount = amount;
    }
}

function printReport(expenses) {
    let total = 0;
    let mealExpenses = 0;

    console.log("Expenses " + new Date().toISOString().slice(0, 10) + "\n");

    for (const expense of expenses) {
        if (expense.type == Type.DINNER || expense.type == Type.BREAKFAST) {
            mealExpenses += expense.amount;
        }

        let expenseName;
        switch (expense.type) {
        case Type.DINNER:
            expenseName = "Dinner";
            break;
        case Type.BREAKFAST:
            expenseName = "Breakfast";
            break;
        case Type.CAR_RENTAL:
            expenseName = "Car Rental";
            break;
        }

        const mealOverExpensesMarker = ((expense.type == Type.DINNER && expense.amount > 5000) || (expense.type == Type.BREAKFAST && expense.amount > 1000)) ? "X" : " ";

        console.log(expenseName + "\t" + expense.amount + "\t" + mealOverExpensesMarker);
        total += expense.amount;
    }

    console.log("Meal expenses: " + mealExpenses);
    console.log("Total expenses: " + total);
}