import React from 'react'
import { merge } from 'lodash'
import TodoDetailViewContainer from './todo_detail_view_container'

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { detail: false }
    this.toggleTodo = this.toggleTodo.bind(this)
    this.toggleDetail = this.toggleDetail.bind(this)
  }

  toggleTodo(e) {
    const newTodo = merge({}, this.props.todo, {done: !this.props.todo.done})
    this.props.receiveTodo(newTodo)
  }

  toggleDetail(e) {
    e.preventDefault()
    this.setState({ detail: !this.state.detail })
  }

  render() {
    let detail

    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={this.props.todo}/>
    }

    return (
      <li>
        <h2>{ this.props.todo.title }</h2>
        <button onClick={ this.toggleTodo }>{ this.props.todo.done ? 'Undo' : 'Finish' }</button>
        <button onClick={ this.toggleDetail }>{ this.state.detail ? 'Hide' : 'Show' }</button>
        { detail }
      </li>
    )
  }
}
