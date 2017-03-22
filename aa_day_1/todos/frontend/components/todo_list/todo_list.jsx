import React from 'react'

const TodoList = ({ todos, receiveTodo }) => {
  const todoComponents = todos.map(todo => <li key={todo.id}>{todo.title}</li>)

  return <ul>{todoComponents}</ul>
}

export default TodoList
