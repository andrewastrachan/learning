import React from 'react'
import StepListItem from './step_list_item'
import StepForm from './step_form'

export default class StepList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const steps = this.props.steps.map(step => {
      return <StepListItem key={ step.id } step={ step } receiveStep={ this.props.receiveStep } removeStep={ this.props.removeStep }/>
    })

    return(
      <div>
        <ul>
          { steps }
        </ul>

        <StepForm receiveStep={ this.props.receiveStep } todo_id={ this.props.todo_id }/>
      </div>
    )
  }
}
