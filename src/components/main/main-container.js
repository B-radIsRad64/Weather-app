import styled from 'styled-components'
import cold from '../../assets/cold.png'
import hot from '../../assets/hot.png'

import { CurrentDate } from './date'
import { Weather } from './weather'

const Container = styled.div`
  background-color: #222831;
  border-radius: 2rem;
  width: 20.2rem;
  height: 37.5rem;
  padding: 1rem;
  background-image: ${props => props.props ? `url(${cold})` : `url(${hot})`};
  background-size: 100%;
  position: relative;
  left: 4rem;
`
export const MainContainer = ({city, weather, temp, icon}) => {
  
  let checkTemp = false;
  if (temp.temp <= 40) {
      checkTemp = true
  } 

  return (
    <Container props={checkTemp}>
      <CurrentDate city={city} />
      <Weather weather={weather} temp={temp} icon={icon}/>
    </Container>
  )
}