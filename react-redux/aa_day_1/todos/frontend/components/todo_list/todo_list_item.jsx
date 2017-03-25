import React from 'react'
import { merge } from 'lodash'
import TodoDetailViewContainer from './todo_detail_view_container'

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.toggleTodo = this.toggleTodo.bind(this)
  }

  toggleTodo(e) {
    const newTodo = merge({}, this.props.todo, {done: !this.props.todo.done})
    this.props.receiveTodo(newTodo)
  }

  render() {
    return (
      <li>
        <TodoDetailViewContainer todo={this.props.todo}/>
        <button onClick={ this.toggleTodo }>{ this.props.todo.done ? 'Undo' : 'Finish' }</button>
      </li>
    )
  }
}
