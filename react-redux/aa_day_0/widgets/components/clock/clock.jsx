import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {now: new Date()}
  }

  componentDidMount() {
    this.intervalId = setInterval(()=> {
      this.setState({now: new Date()})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const now = this.state.now
    const time = now.getHours() + ':' + now.getMinutes() + ":" + now.getSeconds()
    const date = now.toDateString()
    return( <div className='clock'>
              <div className='clock__row'>
                <div>time:</div><div>{time}</div>
              </div>
              <div className='clock__row'>
                <div>date:</div><div>{date}</div>
              </div>
            </div>
    )
  }
}
