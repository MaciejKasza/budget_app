const budgetList =  [
    {
        id: 1,
        name: "Buget 1",
        amount: 2000,
        currency: 'PLN',
        expense: [
            {
                id: 1,
                budget_id: 1,
                name: "Kurs Reacta",
                amount: 699,
            }
        ]
    }, {
        id: 2,
        name: "Buget 2",
        amount: 3000,
        currency: 'USD',
        expense: [
            {
                id: 2,
                budget_id: 2,
                name: "Kurs SQL",
                amount: 599,
            }
        ]
    }
];

export async function getBudgetsList() {
    const result = budgetList;

    return result;
}

export async function getBudget(id){}

export async function addBudgetAPI(name, amount){
    const item = {
        id: Math.floor(Math.random() * 10000),
        name: name,
        amount: amount,
        currency: 'PLN',
        expense: []
    }
    budgetList.push(item);
    return item;
}


