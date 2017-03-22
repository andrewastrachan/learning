const allTodos = (store) => {
  const todos    = store.getState().todos
  const todoKeys = Object.keys(todos)
  return todoKeys.map((key) => {return todos[key]})
}

export default allTodos

window.allTodos = allTodos
