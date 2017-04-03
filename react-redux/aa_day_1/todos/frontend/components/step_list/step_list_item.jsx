import React from 'react'
import { merge } from 'lodash'

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props)
    this.toggleStep = this.toggleStep.bind(this)
    this.removeStep = this.removeStep.bind(this)
  }

  toggleStep(e) {
    e.preventDefault()
    const newStep = merge({}, this.props.step, {done: !this.props.step.done})
    this.props.receiveStep(newStep)
  }

  removeStep(e) {
    this.props.removeStep(this.props.step.id)
  }

  render() {
    return (
      <li>
        <div>{ this.props.step.title }</div>
        <div>{ this.props.step.body }</div>
        <button onClick={ this.toggleStep }>{ this.props.step.done ? 'Undo' : 'Finish' }</button>
        <button onClick={ this.removeStep }>Delete</button>
      </li>
    )
  }
}
