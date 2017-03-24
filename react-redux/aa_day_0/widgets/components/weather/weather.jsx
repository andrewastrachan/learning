import React from 'react'

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude} = pos.coords
      const requestString = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=ef710298d129b9d7c78e2c53fc2a65b9`
      const weatherRequest = new XMLHttpRequest();

      weatherRequest.onreadystatechange = (e) => {
        if (weatherRequest.readyState == XMLHttpRequest.DONE) {
          if (weatherRequest.status == 200) {
          } else {
          }
        }
      }

      weatherRequest.open('GET', requestString, true)
      weatherRequest.send()
    })
  }

  render() {
    return <div>Weather goes here..</div>
  }
}
