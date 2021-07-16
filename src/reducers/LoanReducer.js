let loan = {
    companyName: "Built",
    approved: false,
    amount: 0
}

export const LoanReducer = (state = loan, action) => {
    switch (action.type) {
        case "changeLoanAmount":
            state.amount = action.data
            return state
        case "approveLoan":
            state.approved = true
            return state
        default: state
    }
}