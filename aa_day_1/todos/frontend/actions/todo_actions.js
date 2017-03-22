export const RECIEVE_TODOS = 'RECIEVE_TODOS';
export const RECIEVE_TODO = 'RECIEVE_TODO';

export const receiveTodos = todos => ({
  type: RECIEVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECIEVE_TODO,
  todo
});
