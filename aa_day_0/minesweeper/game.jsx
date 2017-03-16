import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/board'
import Modal from './components/modal'
import * as Minesweeper from './minesweeper'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {board: new Minesweeper.Board(10, 10)}
    this.updateGame = this.updateGame.bind(this)
    this.restartGame = this.restartGame.bind(this)
  }

  updateGame(tile, flagging) {
    flagging ? tile.toggleFlag() : tile.explore()
    this.setState({ board: this.state.board })
  }

  restartGame() {
    this.setState({board: new Minesweeper.Board(10, 10)})
  }

  render() {
    return(
      <div className='main'>
        <h1>Minesweeper</h1>
        <Modal board={this.state.board} restartGame={this.restartGame}/>
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  ReactDOM.render(<Game Minesweeper={Minesweeper}/>, root)
})

