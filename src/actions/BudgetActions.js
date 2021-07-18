export const changeBudgetAmount = (budgetAmount) => {
    return {
        type: 'budget/changeBudgetAmount',
        payload: budgetAmount
    }
}