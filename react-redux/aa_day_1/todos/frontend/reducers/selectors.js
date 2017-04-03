export const allTodos = state => {
  const todos    = state.todos
  const todoKeys = Object.keys(todos)
  return todoKeys.map(key => todos[key])
}

export const allSteps = state => {
  const steps    = state.steps
  const stepKeys = Object.keys(steps)
  return stepKeys.map(key => steps[key])
}

export const stepsByTodoId = (state, todoId) => {
  const steps = allSteps(state)
  return steps.filter(step => step.todo_id == todoId )
}
