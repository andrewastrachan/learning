import { RECIEVE_TODOS, RECIEVE_TODO } from '../actions/todo_actions.js'
import { merge } from 'lodash'

//Test
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state=initialState, action) => {
  Object.freeze(state);
  let newTodos

  switch(action.type){
    case RECIEVE_TODOS:
      newTodos = {}
      action.todos.forEach(todo => newTodos[todo.id] = todo)
      return newTodos
    case RECIEVE_TODO:
      newTodos = merge({}, state)
      newTodos[action.todo.id] = action.todo
      return newTodos
    default:
      return state
  }
};

export default todosReducer
