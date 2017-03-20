import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import { receiveTodo, receiveTodos } from './actions/todo_actions'
import allTodos from './reducers/selectors'

const entry = (store) => (
  <div>Hello, world</div>
)

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()

  window.store = store
  window.allTodos = allTodos
  window.receiveTodos = receiveTodos
  window.receiveTodo = receiveTodo

  const root = document.getElementById('root')
  ReactDOM.render(entry(store), root)
})
