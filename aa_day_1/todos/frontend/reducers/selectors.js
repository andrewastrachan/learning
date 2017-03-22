export const allTodos = (state) => {
  const todos    = state.todos
  const todoKeys = Object.keys(todos)
  return todoKeys.map((key) => todos[key])
}
