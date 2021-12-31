import { useState, useEffect } from 'react'
import styled from'styled-components'
import axios from 'axios'

import { WeatherDetailContainer } from './components/detail/weather-details-container'
import { MainContainer } from './components/main/main-container'

const Container = styled.div`
  background-color: #b5b5b5;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const App = () => {

  const [city, setCity] = useState('Salt Lake City')
  const [weather, setWeather] = useState([])
  const [icon, setIcon] = useState('')
  const [temp, setTemp] = useState([])
  const [wind, setWind] = useState([])
  const [visibility, setVisibility] = useState([])
  

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&APPID=335756365b0b7c791093e88fe1021bd0`)
    .then((res) => {
      setWeather(res.data.weather[0].main)
      setIcon(res.data.weather[0].icon)
      setTemp(res.data.main)
      setWind(res.data.wind)
      setVisibility(res.data.visibility)
    })
}, [city])

  const handleChange = (e) => {
    if (e.key === 'Enter') {
      setCity(e.target.value)
    }
  }

  return (
    <Container>
      <MainContainer 
        city={city}
        weather={weather}
        temp={temp}
        icon={icon}/>
      <WeatherDetailContainer 
        weather={weather}
        temp={temp}
        wind={wind}
        visibility={visibility}
        handleChange={handleChange}/>
    </Container>
  )
}