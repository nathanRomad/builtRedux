let loan = {
    companyName: "Built",
    approved: false,
    amount: 0
}

const LoanReducer = (state = loan, action) => {
    switch (action.type) {
        case "loan/changeLoanAmount":
            state.amount = action.payload
            return state
        case "loan/approveLoan":
            state.approved = true
            return state
        default: return state
    }
}

export default LoanReducer;