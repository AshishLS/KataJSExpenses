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