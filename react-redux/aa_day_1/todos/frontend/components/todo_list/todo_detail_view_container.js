import { connect } from 'react-redux'
import { removeTodo } from '../../actions/todo_actions'
import todoDetailView from './todo_detail_view'

const mapDispatchToProps = (dispatch, {todo}) => ({
  removeTodo: () => dispatch(removeTodo(todo.id))
})

const createConnectedComponenet = connect(null, mapDispatchToProps)
const TodoDetailViewContainer = createConnectedComponenet(todoDetailView)

export default TodoDetailViewContainer
