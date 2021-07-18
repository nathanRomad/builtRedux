let collateral = {
    value: 0,
    verified: false
}

const CollateralReducer = (state = collateral, action) => {
    switch (action.type) {
        case "collateral/changeCollateralAmount":
            state.value = action.payload
            return state
        case "collateral/verifyCollateral":
            state.verified = true
            return state
        default: return state
    }
}

export default CollateralReducer;