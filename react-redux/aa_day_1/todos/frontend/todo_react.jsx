import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import { receiveTodo, receiveTodos } from './actions/todo_actions'
import allTodos from './reducers/selectors'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={ store }/>, root)
  // window.store = store
  // window.allTodos = allTodos
  // window.receiveTodos = receiveTodos
  // window.receiveTodo = receiveTodo
})
