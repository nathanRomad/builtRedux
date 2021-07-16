let collateral = {
    value: 0,
    verified: false
}

export const CollateralReducer = (state = collateral, action) => {
    switch (action.type) {
        case "changeCollateralAmount":
            state.value = action.data
            return state
        case "verifyCollateral":
            state.verified = true
            return state
        default: state
    }
}