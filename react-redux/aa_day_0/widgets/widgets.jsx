import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from './components/tabs/tabs'
import Clock from './components/clock/clock'
import Weather from './components/weather/weather'
import Autocomplete from './components/autocomplete/autocomplete'

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

    const names = ['Andrew', 'Addison', 'Alex', 'Sophia', 'Sonya', 'Whit', 'Christian']

    return(
      <div className='widgets'>
        <div className='tabs__container'>
          <h1>Tabs</h1>
          <Tabs tabs={tabs}/>
        </div>

        <div className='clock__container'>
          <h1>Clock</h1>
          <Clock/>
        </div>

        <div className='weather__container'>
          <h1>Weather</h1>
          <Weather/>
        </div>

        <div className='autocomplete__container'>
          <h1>Autocomplete</h1>
          <Autocomplete names={names}/>
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('root')
  ReactDOM.render(<Root/>, root)
})
