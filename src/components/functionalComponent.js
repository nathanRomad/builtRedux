import { useSelector, useDispatch } from 'react-redux'
import { changeCollateralAmount } from '../actions/CollateralActions'
import { changeBudgetAmount } from '../actions/BudgetActions'

export const FunctionalComponent = () => {
    const dispatch = useDispatch()
    const collateral = useSelector(state => state.collateralReducer)
    const budget = useSelector(state => state.budgetReducer)

    return (
        <>
            <form>
                <fieldset>
                    <label htmlFor="collateral">Collateral: </label>
                    {/* not sure why value={collateral.x} is working.. expected collateral.value */}
                    <input type="number" name="collateral" value={collateral.x} onChange={(e) => dispatch(changeCollateralAmount(e.target.value))} />
                </fieldset>
                <fieldset>
                    <label htmlFor="budget">Budget: </label>
                    {/* not sure why value={budget.x} is working.. expected budget.amount */}
                    <input type="number" name="budget" value={budget.x} onChange={(e) => dispatch(changeBudgetAmount(e.target.value))} />
                </fieldset>
            </form>
        </>
    )
}