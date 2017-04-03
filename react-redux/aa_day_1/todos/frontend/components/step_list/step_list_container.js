import { connect } from 'react-redux'
import { receiveStep, removeStep } from '../../actions/step_actions'
import { stepsByTodoId } from '../../reducers/selectors'
import StepList from './step_list'

const mapStateToProps = (state, { todo_id }) => {
  return  ({
    steps: stepsByTodoId(state, todo_id),
    todo_id: todo_id
  })
}

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
  removeStep: (id) => dispatch(removeStep(id))
})

const createConnectedComponent = connect(mapStateToProps, mapDispatchToProps)

const StepListContainer = createConnectedComponent(StepList)

export default StepListContainer
