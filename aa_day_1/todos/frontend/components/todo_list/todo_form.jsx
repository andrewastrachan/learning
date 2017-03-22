import React from 'react'
import { uniqueId } from '../../util/utils'
import { merge } from 'lodash'

const INITIAL_STATE = {todo: {id: undefined, title: ''}}

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = merge({}, INITIAL_STATE)
    this.updateTitle = this.updateTitle.bind(this)
    this.submitForm  = this.submitForm.bind(this)
  }

  updateTitle(e) {
    this.setState({todo: {title: e.target.value}})
  }

  submitForm(e) {
    this.state.todo.id = uniqueId()
    this.props.receiveTodo(this.state.todo)
    this.setState(merge({}, INITIAL_STATE))
  }

  render() {
    return (
      <div>
        <input onChange={ this.updateTitle } value={ this.state.todo.title }/>
        <button onClick={ this.submitForm }>
          Submit
        </button>
      </div>
    )
  }
}

