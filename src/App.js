import { useSelector, useDispatch } from 'react-redux'
import {changeLoanAmount} from './actions/LoanActions'
import {FunctionalComponent} from './components/functionalComponent'

function App() {
  const dispatch = useDispatch()
  const loan = useSelector(state => state.loanReducer)
dispatch(changeLoanAmount(100))

return (
    <>
      <div className="App"></div>
      <h1>Company Name: {loan.companyName} </h1>
      <div>Loan Amount: {loan.amount}</div>
      <div>Loan Approval: {loan.approved.toString()}</div>
      <FunctionalComponent />
    </>
  );
}

export default App;