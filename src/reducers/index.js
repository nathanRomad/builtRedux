import {combineReducers} from 'redux'
import budgetReducer from './BudgetReducer'
import loanReducer from './LoanReducer'
import collateralReducer from './CollateralReducer'

export const allReducers = combineReducers({
    budgetReducer: budgetReducer,
    collateralReducer: collateralReducer,
    loanReducer: loanReducer
})