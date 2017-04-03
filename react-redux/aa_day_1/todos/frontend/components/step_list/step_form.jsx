import React from 'react'
import { merge } from 'lodash'
import { uniqueId } from '../../util/utils'

export default class StepForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {step: {title: '', body: '', todo_id: this.props.todo_id}}
    this.updateStepTitle = this.updateStepTitle.bind(this)
    this.updateStepBody = this.updateStepBody.bind(this)
    this.createStep = this.createStep.bind(this)
  }

  updateStepTitle(e) {
    e.preventDefault()
    this.setState({
      step: {
        title: e.currentTarget.value,
        body: this.state.step.body,
        todo_id: this.state.step.todo_id
      }
    })
  }

  updateStepBody(e) {
    e.preventDefault()
    this.setState({
      step: {
        title: this.state.step.title,
        body: e.currentTarget.value,
        todo_id: this.state.step.todo_id
      }
    })
  }

  createStep(e) {
    let newStep = merge({}, this.state.step)
    newStep.id = uniqueId()
    this.props.receiveStep(newStep)
    this.setState({step: {title: '', body: '', todo_id: this.props.todo_id}})
  }

  render() {
    return(
      <div>
        <h3>Create Step</h3>
        <input onChange={ this.updateStepTitle } value={ this.state.step.title }/>
        <input onChange={ this.updateStepBody } value={ this.state.step.body }/>
        <button onClick={ this.createStep }>Submit</button>
      </div>
    )
  }
}
