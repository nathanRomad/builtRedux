let loan = {
    companyName: "Built",
    approved: false,
    amount: 0
}

const LoanReducer = (state = loan, action) => {
    switch (action.type) {
        case "changeLoanAmount":
            state.amount = action.data
            return state
        case "approveLoan":
            state.approved = true
            return state
        default: return state
    }
}

export default LoanReducer;