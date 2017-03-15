import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.selectTab = this.selectTab.bind(this)
  }

  selectTab(e) {
    this.props.selectTabByTitle(this.props.title)
  }

  render() {
    const headerClass = this.props.selected ? "tab-header__selected" : ""

    return <li onClick={this.selectTab} className={headerClass}><h1>{this.props.title}</h1></li>
  }
}

export default Header
