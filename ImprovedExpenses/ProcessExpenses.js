function printInHTML(message) {
    console.log(message);
    document.getElementById("messageDiv").innerHTML += "<br>" + message;
}

function printReport(expenses, date) {
    let total = 0;
    let mealExpenses = 0;
    let timestamp = "";
    if (date != undefined)
        timestamp = date;
    else
        timestamp = new Date().toISOString().slice(0, 10);

    printInHTML("Expenses " + timestamp)

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
}