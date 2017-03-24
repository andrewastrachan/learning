import React from 'react'
import { connect } from 'react-redux'
import { allTodos } from '../../reducers/selectors'
import { receiveTodo, removeTodo } from '../../actions/todo_actions'
import TodoList from './todo_list'

const mapStateToProps = (state) => ({
  todos: allTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (id) => dispatch(removeTodo(id))
})

const createConnectedComponenet = connect(mapStateToProps, mapDispatchToProps)
const TodoListContainer = createConnectedComponenet(TodoList)

export default TodoListContainer
