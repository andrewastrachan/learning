import React from 'react'
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

const TodoList = ({ todos, receiveTodo, removeTodo }) => {
  const todoComponents = todos.map(todo => {
    return <TodoListItem key={ todo.id } todo={ todo } removeTodo={ removeTodo } receiveTodo={ receiveTodo }/>
  })

  return (
    <div>
      <ul>{todoComponents}</ul>
      <TodoForm receiveTodo={ receiveTodo }/>
    </div>
  )
}

export default TodoList
