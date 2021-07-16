const changeCollateralAmount = (collateralAmount) => {
    return {
        type: 'changeCollateralAmount',
        data: collateralAmount
    }
}

const verifyCollateral = () => {
    return {
        type: 'verifyCollateral',
    }
}

export default changeCollateralAmount;
export default verifyCollateral;