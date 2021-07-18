import {combineReducers} from 'redux'
import budgetReducer from './BudgetReducer'
import loanReducer from './LoanReducer'
import collateralReducer from './CollateralReducer'

const allReducers = combineReducers({
    budgetReducer: budgetReducer,
    collateralReducer: collateralReducer,
    loanReducer: loanReducer
})
export default allReducers;