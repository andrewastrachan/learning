import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', result: 0 }
    this.setNum1 = this.setNum1.bind(this)
    this.setNum2 = this.setNum2.bind(this)
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
    this.multiply = this.multiply.bind(this)
    this.divide = this.divide.bind(this)
    this.reset = this.reset.bind(this)
    this.canGetResult = this.canGetResult.bind(this)
    this.isNumber = this.isNumber.bind(this)
  }

  setNum1(event) {
    const num1 = event.target.value ? parseInt(event.target.value) : "";
    this.setState({ num1 })
  }

  setNum2(event) {
    const num2 = event.target.value ? parseInt(event.target.value) : ""
    this.setState({ num2 })
  }

  canGetResult() {
    return this.isNumber(this.state.num1) && this.isNumber(this.state.num2)
  }

  isNumber(num) {
    return num && num.constructor == Number
  }

  add(event) {
    event.preventDefault()
    const result = this.canGetResult() ? this.state.num1 + this.state.num2 : 0
    this.setState({ result })
  }

  subtract(event) {
    event.preventDefault()
    const result = this.canGetResult() ? this.state.num1 - this.state.num2 : 0
    this.setState({ result })
  }

  multiply(event) {
    event.preventDefault()
    const result = this.canGetResult() ? this.state.num1 * this.state.num2 : 0
    this.setState({ result })
  }

  divide(event) {
    event.preventDefault()
    const result = this.canGetResult() ? this.state.num1 / this.state.num2 : 0
    this.setState({ result })
  }

  reset(event) {
    event.preventDefault()
    this.setState({ num1: '', num2: '', result: 0 })
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.reset}>reset</button>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <input onChange={this.setNum2} value={this.state.num2}/>
      </div>
    )
  }
}

export default Calculator;
