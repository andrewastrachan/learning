import React from 'react'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.restartGame()
  }

  render() {
    var modalClass = 'modal'
    var message = ''
    const board = this.props.board

    if (board.lost()) {
      message = 'You Lost!'
      modalClass = 'modal modal__visible'
    } else if (board.won()) {
      message = 'You Win!'
      modalClass = 'modal modal__visible'
    }
    return(
      <div className={modalClass}>
        <div>
          {message}
        </div>
        <button onClick={this.handleClick}>Restart</button>
      </div>
    )
  }
}
