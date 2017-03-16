import React from 'react'

export default class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let board = this.props.board.grid.map((row, idx) => {
      let tiles = row.map((tile, idx)=> {
        return <div className='tile' key={idx}>T</div>
      })
      return <div className='row' key={idx}>{tiles}</div>
    })

    return <div className='board'>{board}</div>
  }
}
