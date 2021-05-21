const Type = {
    BREAKFAST: 1,
    LUNCH: 2,
    DINNER: 3,
};

class Expense {
    constructor(amount) {
        this.amount = amount;
        this.name = "";
        this.isMealExpense = false;
        this.overExpenseLimit = 0;
    }

    isOverExpensive() {
        return false;
    }
}

class DinnerExpense extends Expense {
    constructor(amount) {
        super(amount);
        this.name = "Dinner";
        this.isMealExpense = true;
        this.overExpenseLimit = 5000;
    }

    isOverExpensive() {
        if (this.amount > this.overExpenseLimit) {
            return true;
        }
    }
}

class LunchExpense extends Expense {
    constructor(amount) {
        super(amount);
        this.name = "Lunch";
        this.isMealExpense = true;
        this.overExpenseLimit = 5000;
    }

    isOverExpensive() {
        if (this.amount > this.overExpenseLimit) {
            return true;
        }
    }
}

class BreakfastExpense extends Expense {
    constructor(amount) {
        super(amount);
        this.name = "Breakfast";
        this.isMealExpense = true;
        this.overExpenseLimit = 5000;
    }

    isOverExpensive() {
        if (this.amount > this.overExpenseLimit) {
            return true;
        }
    }
}

class ExpenseFactory {
    static createExpense(type, amount) {
        let expense = null;
        switch (type) {
            case Type.DINNER:
                expense = new DinnerExpense(amount);
                break;
            case Type.BREAKFAST:
                expense = new BreakfastExpense(amount);
                break;
            case Type.LUNCH:
                expense = new LunchExpense(amount);
                break;
            default:
                alert("This Type of Expense is not defined");

        }

        return expense;
    }
}

function printInHTML(message) {
    console.log(message);
    document.getElementById("messageDiv").innerHTML += "<br>" + message;
}

function printReportImproved(expenses) {
    let total = 0;
    let mealExpenses = 0;

    printInHTML("Expenses " + new Date().toISOString().slice(0, 10) + "\n");

    for (const expense of expenses) {
        if (expense.isMealExpense) {
            mealExpenses += expense.amount;
        }

        const mealOverExpensesMarker = expense.isOverExpensive() ? "X" : " ";

        printInHTML(expense.name + "\t" + expense.amount + "\t" + mealOverExpensesMarker);
        total += expense.amount;
    }

    printInHTML("Meal expenses: " + mealExpenses);
    printInHTML("Total expenses: " + total);
    printInHTML("Done");
}