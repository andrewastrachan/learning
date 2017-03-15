import React from 'react'

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {search: ''}
    this.inputChanged = this.inputChanged.bind(this)
    this.selectName = this.selectName.bind(this)
  }

  inputChanged(e) {
    this.setState({search: e.currentTarget.value})
  }

  selectName(e) {
    this.setState({search: e.currentTarget.innerHTML})
  }

  render() {
    const filteredNames = this.props.names.filter(((name) => {
      return name.toLowerCase().startsWith(this.state.search.toLowerCase())
    }).bind(this)).map(((name) => {
      return <li onClick={this.selectName}>{name}</li>
    }).bind(this))

    return (
      <div>
        <input onChange={this.inputChanged} value={this.state.search}/>
        <ul>{filteredNames}</ul>
      </div>
    )
  }
}
