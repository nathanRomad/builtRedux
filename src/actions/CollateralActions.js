export const changeCollateralAmount = (collateralAmount) => {
    return {
        type: 'changeCollateralAmount',
        data: collateralAmount
    }
}

export const verifyCollateral = () => {
    return {
        type: 'verifyCollateral',
    }
}