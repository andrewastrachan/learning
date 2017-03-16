import React from 'react'

export default class Tile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const tile = this.props.tile

    var tileClass;
    if (tile.explored) {
      tileClass = tile.bombed ? 'tile tile__revealed tile__bombed' : 'tile tile__revealed'
    } else {
      tileClass = tile.flagged ? 'tile tile__flagged' : 'tile'
    }

    return <div className={tileClass}>
      <div className='bomb'>&#128163;</div>
      <div className='flag'>&#9873;</div>
    </div>
  }
}

