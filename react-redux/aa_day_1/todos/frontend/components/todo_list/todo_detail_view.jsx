import React from 'react'
import StepListContainer from '../step_list/step_list_container'

export default class todoDetailView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>{ this.props.todo.body }</div>
        <button onClick={ this.props.removeTodo }>Delete</button>
        <StepListContainer todo_id={ this.props.todo.id }/>
      </div>
    )
  }
}
