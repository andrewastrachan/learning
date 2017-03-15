import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {tabIndex: 0}
  }

  render() {
    const selectedTab = this.props.tabs[this.state.tabIndex]
    const tabs = this.props.tabs.map((tab) =>
      <li><h1>{tab.title}</h1></li>
    )

    return(
      <div>
        <ul className='tab-list'>
          {tabs}
        </ul>

        <div>
          {selectedTab.content}
        </div>
      </div>
    )
  }
}

export default Tabs
