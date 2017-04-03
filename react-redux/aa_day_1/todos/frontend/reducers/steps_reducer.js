import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions'
import { merge } from 'lodash'

const initialState = {
  1: {
    id: 1,
    title: 'wash tires',
    done: false,
    todo_id: 1
  },

  2: {
    id: 2,
    title: 'wash paws',
    done: false,
    todo_id: 2
  }
}

const stepsReducer = (state=initialState, action) => {
  Object.freeze(state);
  let newSteps
  switch(action.type) {
    case RECEIVE_STEPS:
      newSteps = {}
      action.steps.forEach(step => newSteps[step.id] = step)
      return newSteps
    case RECEIVE_STEP:
      newSteps = merge({}, state)
      newSteps[action.step.id] = action.step
      return newSteps
    case REMOVE_STEP:
      newSteps = merge({}, state)
      delete newSteps[action.id]
      return newSteps
    default:
      return state
  }
}

export default stepsReducer
