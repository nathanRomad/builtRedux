let budget = {
    amount: 0
}

const BudgetReducer = (state = budget, action) => {
    switch (action.type) {
        case "budget/changeBudgetAmount":
            state.amount = action.payload
            return state
        default: return state
    }
}
export default BudgetReducer;