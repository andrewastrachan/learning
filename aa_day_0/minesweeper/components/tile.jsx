import React from 'react'

export default class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const flagging = e.altKey ? true : false
    this.props.updateGame(this.props.tile, flagging)
  }

  render() {
    var tileClass;
    var adjacentCount;

    const tile = this.props.tile
    if (tile.explored) {
      if (tile.bombed) {
        tileClass = 'tile tile__revealed tile__bombed'
      } else {
        tileClass = 'tile tile__revealed tile__counted'
        var adjacentCount = this.props.tile.adjacentBombCount()
      }
    } else {
      tileClass = tile.flagged ? 'tile tile__flagged' : 'tile'
    }

    return (<div onClick={this.handleClick} className={tileClass}>
              <div className='bomb'>&#128163;</div>
              <div className='flag'>&#9873;</div>
              <div className='count'>{adjacentCount}</div>
            </div>
    )
  }
}

