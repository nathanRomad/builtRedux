import { useSelector, useDispatch } from 'react-redux'
import { changeCollateralAmount, verifyCollateral } from '../actions/CollateralActions'
import { changeBudgetAmount } from '../actions/BudgetActions'
import { changeLoanAmount } from '../actions/LoanActions'

export const FunctionalComponent = () => {
    const dispatch = useDispatch()
    const collateral = useSelector(state => state.collateralReducer)
    const budget = useSelector(state => state.budgetReducer)
    const loan = useSelector(state => state.loanReducer)

    return (
        <>
            <form>
                <fieldset>
                    <label htmlFor="collateral">Collateral: </label>
                    {/* not sure why value={collateral.x} is working.. expected collateral.value */}
                    <input type="number" name="collateral" value={collateral.x} onChange={(e) => dispatch(changeCollateralAmount(e.target.value))} />
                    <button onClick={(e) => {
                        e.preventDefault()
                        dispatch(verifyCollateral())
                    }}>Verify</button>
                </fieldset>
                <fieldset>
                    <label htmlFor="budget">Budget: </label>
                    {/* not sure why value={budget.x} is working.. expected budget.amount */}
                    <input type="number" name="budget" value={budget.x} onChange={(e) => dispatch(changeBudgetAmount(e.target.value))} />
                </fieldset>
                <fieldset>
                    <label htmlFor="loan">Loan: </label>
                    {/* not sure why value={budget.x} is working.. expected budget.amount */}
                    <input type="number" name="loan" value={loan.x} onChange={(e) => dispatch(changeLoanAmount(e.target.value))} />
                </fieldset>
            </form>
        </>
    )
}