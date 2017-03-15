import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.selectTab = this.selectTab.bind(this)
  }

  selectTab(e) {
    this.props.selectTabByTitle(this.props.title)
  }

  render() {
    const headerClass = this.props.selected ? "tab tab__selected" : "tab"

    return(
      <div onClick={this.selectTab} className={headerClass}>
        <div>{this.props.title}</div>
      </div>
    )
  }
}

export default Tab
