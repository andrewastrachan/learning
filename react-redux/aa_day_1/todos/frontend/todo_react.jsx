import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

import { receiveSteps, receiveStep, removeStep } from './actions/step_actions'
import { allSteps, stepsByTodoId } from './reducers/selectors'


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={ store }/>, root)

  window.receiveSteps = receiveSteps
  window.receiveStep = receiveStep
  window.removeStep = removeStep
  window.store = store
  window.allSteps = allSteps
  window.stepsByTodoId = stepsByTodoId
})
