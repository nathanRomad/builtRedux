export const changeLoanAmount = (loanAmount) => {
    return {
        type: 'changeLoanAmount',
        data: loanAmount
    }
}

export const approveLoan = () => {
    return {
        type: 'approveLoan'
    }
}

