import React from 'react'
import Tile from './tile'

export default class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let board = this.props.board.grid.map((row, rowIndex) => {
      let tiles = row.map((tile, tileIndex)=> {
        return <Tile key={tileIndex} rowIndex={rowIndex} tileIndex={tileIndex} tile={tile} updateGame={this.props.updateGame}/>
      })
      return <div className='row' key={rowIndex}>{tiles}</div>
    })

    return <div className='board'>{board}</div>
  }
}
