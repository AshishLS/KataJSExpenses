class CustomLogger {
    constructor() {

    }

    static startInterceptingLog() {
        if (console.everything === undefined) {
            console.everything = [];

            console.defaultLog = console.log.bind(console);
            console.log = function () {
                console.everything.push(Array.from(arguments));
                console.defaultLog.apply(console, arguments);
            }
            console.defaultError = console.error.bind(console);
            console.error = function () {
                console.everything.push(Array.from(arguments));
                console.defaultError.apply(console, arguments);
            }
            console.defaultWarn = console.warn.bind(console);
            console.warn = function () {
                console.everything.push(Array.from(arguments));
                console.defaultWarn.apply(console, arguments);
            }
            console.defaultDebug = console.debug.bind(console);
            console.debug = function () {
                console.everything.push(Array.from(arguments));
                console.defaultDebug.apply(console, arguments);
            }
        }

    }

    static stopInterceptingLog() {
        if (console.everything != undefined) {
            console.log = console.defaultLog;
            console.error = console.defaultError;
            console.warn = console.defaultWarn;
            console.debug = console.defaultDebug;
        }
        console.everything = undefined;
    }
}

/************************************************************************************************/

function compareWithConsoleLog(requiredStr) {

    // Get the intercepted console messages
    let outputStr = "";
    console.everything.forEach(element => {
        outputStr += element + "\n";
    });

    return outputStr == requiredStr;
}

function test1() {
    CustomLogger.startInterceptingLog();

    const requiredStr =
        "Expenses 2021-05-28\nDinner\t6000\tX\nLunch\t2000\t \nDinner\t4000\t \nCarwash\t2000\t \nMeal expenses: 12000\nTotal expenses: 14000\n";

    let expenses = [ExpenseFactory.createExpense(Type.BREAKFAST, 6000),
    ExpenseFactory.createExpense(Type.LUNCH, 2000),
    ExpenseFactory.createExpense(Type.DINNER, 4000),
    ExpenseFactory.createExpense(Type.CARWASH, 2000),];

    printReport(expenses, "2021-05-28");
    const result = compareWithConsoleLog(requiredStr);

    CustomLogger.stopInterceptingLog();
    return result;

}

function test2() {
    CustomLogger.startInterceptingLog();

    const requiredStr =
        "Expenses 2021-05-27\nDinner\t6000\tX\nLunch\t2000\t \nDinner\t4000\t \nCarwash\t2000\t \nMeal expenses: 12000\nTotal expenses: 14000\n";

    let expenses = [ExpenseFactory.createExpense(Type.BREAKFAST, 6000),
    ExpenseFactory.createExpense(Type.LUNCH, 2000),
    ExpenseFactory.createExpense(Type.DINNER, 4000),
    ExpenseFactory.createExpense(Type.CARWASH, 2000),];

    printReport(expenses, "2021-05-27");
    result = compareWithConsoleLog(requiredStr);

    CustomLogger.stopInterceptingLog();
    return result;
}

function runTests() {
    const testResults = new Map();
    testResults.set("Test1", test1());
    testResults.set("Test2", test2());

    // print final result
    let result = "";
    let color = "";
    for (let [key, value] of testResults) {
        result = "%cFAILED";
        color = "background:red";
        if (value) {
            result = "%cPASSED";
            color = "background:green";
        }
        console.log(key + ' : ' + result, color)
    }
}