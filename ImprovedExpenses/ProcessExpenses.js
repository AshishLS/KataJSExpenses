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