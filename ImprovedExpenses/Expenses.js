

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
        this.name = ExpenseConfig.Dinner.name;
        this.overExpenseLimit = ExpenseConfig.Dinner.overExpenseLimit;;
        this.isMealExpense = true;
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
        this.name =ExpenseConfig.Lunch.name;
        this.overExpenseLimit = ExpenseConfig.Lunch.overExpenseLimit;
        this.isMealExpense = true;
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
        this.name = ExpenseConfig.Breakfast.name;
        this.overExpenseLimit = ExpenseConfig.Breakfast.overExpenseLimit;
        this.isMealExpense = true;
    }

    isOverExpensive() {
        if (this.amount > this.overExpenseLimit) {
            return true;
        }
    }
}

class CarwashExpense extends Expense {
    constructor(amount) {
        super(amount);
        this.name = ExpenseConfig.Carwash.name;
        this.isMealExpense = false;
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
            case Type.CARWASH:
                expense = new CarwashExpense(amount);
                break;
            default:
                alert("This Type of Expense is not defined");

        }

        return expense;
    }
}

