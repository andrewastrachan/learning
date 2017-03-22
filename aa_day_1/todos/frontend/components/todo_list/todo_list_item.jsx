import React from 'react'

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
  }

  deleteTodo(e) {
    this.props.removeTodo(this.props.todo.id)
  }

  toggleTodo(e) {
    this.props.todo.done = !this.props.todo.done
    this.props.receiveTodo(this.props.todo)
  }

  render() {
    return (
      <li>
        <div>{ this.props.todo.title }</div>
        <button onClick={ this.deleteTodo }>Delete</button>
        <button onClick={ this.toggleTodo }>{ this.props.todo.done ? 'Undo' : 'Finish' }</button>
      </li>
    )
  }
}
