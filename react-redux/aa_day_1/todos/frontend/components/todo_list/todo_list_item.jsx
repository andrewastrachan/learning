import React from 'react'
import { merge } from 'lodash'

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
    const newTodo = merge({}, this.props.todo, {done: !this.props.todo.done})
    this.props.receiveTodo(newTodo)
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
