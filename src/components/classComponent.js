import React, { Component } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { changeLoanAmount } from './actions/LoanActions'
// import { FunctionalComponent } from './components/functionalComponent'

class Summary extends React.Component {
  constructor(props) {
        super(props);
        this.state= {
          property: 'value'
        }
  // const dispatch = useDispatch()
  // const loan = useSelector(state => state.loanReducer)
  // dispatch(changeLoanAmount(100))


render() {
  return
  <>
    <h1>Company Name: {loan.companyName} </h1>
    <div>Loan Amount: {loan.amount}</div>
    <div>Loan Approval: {loan.approved.toString()}</div>;
  </>
}
}

  // To write a class component:
  // First import the Component class from "react" package:
  // import React,{Component} from "react"
  // The steps are as follows:
  // Car/Garage simply inherits from the React.Component class.
  // The render() method is called to display the element into the browser. 
  // render() is essentially a lifecycle method.

  // To declare a state:
  // Step 1: Declare a constructor for your class component and use super()
  // Step 2 : Add properties and values to the this.state object. This is to be done within your constructor
  // Step 3 : To display the value of this property, use simple JSX.

//.assuming all necessary imports are done
// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state= {
//       property: 'value'
//     }
//   }
//   render() {
//   return(
//   <h1> {this.state.property} </h1>  
//   )
//   }
// }


  // class Car extends React.Component {
  //   render() {
  //     return <h2>I am a Car!</h2>;
  //   }
  // }

  // class Garage extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //       <h1>Who lives in my Garage?</h1>
  //       <Car />
  //       </div>
  //     );
  //   }
  // }

  // ReactDOM.render(<Garage />, document.getElementById('root'));