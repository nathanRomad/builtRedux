let budget = {
    amount: 0
}

export const BudgetReducer = (state = budget, action) => {
    switch (action.type) {
        case "changeBudgetAmount":
            state.amount = action.data
            return state
        default: state
    }
}