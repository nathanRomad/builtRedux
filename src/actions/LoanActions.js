export const changeLoanAmount = (loanAmount) => {
    return {
        type: 'loan/changeLoanAmount',
        payload: loanAmount
    }
}

export const approveLoan = () => {
    return {
        type: 'loan/approveLoan'
    }
}