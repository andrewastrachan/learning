import React from 'react'
import TodoListItem from './todo_list_item'

const TodoList = ({ todos, receiveTodo }) => {
  const todoComponents = todos.map(todo => <TodoListItem key={ todo.id } todo={ todo }/>)

  return <ul>{todoComponents}</ul>
}

export default TodoList
