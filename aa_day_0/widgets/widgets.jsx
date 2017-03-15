import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from './components/tabs/tabs'

class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const tabs = [
      {title: 'Home', content: 'Home sweet home'},
      {title: 'About', content: 'About me'},
      {title: 'Menu', content: "What's on the menu?"}
    ]

    return(
      <div className='widgets'>
        <div className='tabs__container'>
          <Tabs tabs={tabs}/>
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root')
  ReactDOM.render(<Root/>, root)
})
