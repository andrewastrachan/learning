import React from 'react'
import Tab from './Tab'

export default class Tabs extends React.Component {
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
      <Tab selectTabByTitle={this.selectTabByTitle} key={tab.title} title={tab.title} selected={selectedTab.title == tab.title} selectTab={this.selectTab}/>
    )

    return(
      <div>
        <div className='tabs__header'>
          {tabs}
        </div>

        <div className='tabs__content'>
          {selectedTab.content}
        </div>
      </div>
    )
  }
}
