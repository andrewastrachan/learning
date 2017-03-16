import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/board'
import * as Minesweeper from './minesweeper'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {board: new Minesweeper.Board(10, 10)}
    this.updateGame = this.updateGame.bind(this)
  }

  updateGame() {
    //stubby
  }

  render() {
    return(
      <div className='main'>
        <h1>Minesweeper</h1>
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  ReactDOM.render(<Game Minesweeper={Minesweeper}/>, root)
})

