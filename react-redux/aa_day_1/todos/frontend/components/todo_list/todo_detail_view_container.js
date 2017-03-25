import React from 'react'
import { connect } from 'react-redux'
import { allTodos } from '../../reducers/selectors'
import { receiveTodo, removeTodo } from '../../actions/todo_actions'
import todoDetailView from './todo_detail_view'

const mapDispatchToProps = (dispatch, {todo}) => ({
  removeTodo: (id) => dispatch(removeTodo(todo.id))
})

const createConnectedComponenet = connect(null, mapDispatchToProps)
const TodoDetailViewContainer = createConnectedComponenet(todoDetailView)

export default TodoDetailViewContainer
