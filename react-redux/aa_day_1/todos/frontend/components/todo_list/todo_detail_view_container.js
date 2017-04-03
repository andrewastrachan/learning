import { connect } from 'react-redux'
import { removeTodo } from '../../actions/todo_actions'
import { receiveSteps } from '../../actions/step_actions'
import todoDetailView from './todo_detail_view'

const mapDispatchToProps = (dispatch, {todo, steps}) => ({
  removeTodo: () => dispatch(removeTodo(todo.id)),
  receiveSteps: () => dispatch(receiveSteps(steps))
})

const createConnectedComponenet = connect(null, mapDispatchToProps)
const TodoDetailViewContainer = createConnectedComponenet(todoDetailView)

export default TodoDetailViewContainer
