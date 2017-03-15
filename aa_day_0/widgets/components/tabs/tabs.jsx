import React from 'react'
import Header from './header'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {tabIndex: 0}
    this.selectTabByTitle = this.selectTabByTitle.bind(this)
  }

  selectTabByTitle(title) {
    for (var i = 0; i < this.props.tabs.length; i++) {
      if (this.props.tabs[i].title === title) {
        return this.setState({ tabIndex: i })
      }
    }
  }

  render() {
    const selectedTab = this.props.tabs[this.state.tabIndex]
    const tabs = this.props.tabs.map((tab) =>
      <Header selectTabByTitle={this.selectTabByTitle} title={tab.title} selected={selectedTab.title == tab.title} selectTab={this.selectTab}/>
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
