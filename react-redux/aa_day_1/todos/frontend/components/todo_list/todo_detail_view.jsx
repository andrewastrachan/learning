import React from 'react'

export default class todoDetailView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>{ this.props.todo.body }</div>
        <button onClick={ this.props.removeTodo }>Delete</button>
      </div>
    )
  }
}
