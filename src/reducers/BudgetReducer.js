let budget = {
    amount: 0
}

const BudgetReducer = (state = budget, action) => {
    switch (action.type) {
        case "changeBudgetAmount":
            state.amount = action.data
            return state
        default: return state
    }
}
export default BudgetReducer;