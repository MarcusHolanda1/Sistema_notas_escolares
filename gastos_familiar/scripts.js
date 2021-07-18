let family = {
    incomes: [-111, 343, 3535, 555.32, 44, 2],
    expenses: [122, 323, 434, 54.33, 32, 1]
}


function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calcIncomes = sum(family.incomes)
    const calcExpenses = sum(family.expenses)

    const total = calcIncomes - calcExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()