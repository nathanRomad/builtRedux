export const changeCollateralAmount = (collateralAmount) => {
    return {
        type: 'collateral/changeCollateralAmount',
        payload: collateralAmount
    }
}

export const verifyCollateral = () => {
    return {
        type: 'collateral/verifyCollateral',
    }
}