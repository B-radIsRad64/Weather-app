import styled from 'styled-components'

import { WeatherDetails } from './weather-details'
import { Input } from './input'

const Container = styled.div`
  background-color: #222831;
  border-radius: 2rem;
  width: 32rem;
  padding: 1rem;
`
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 2.5rem;
`
export const WeatherDetailContainer = ({ weather, temp, wind, visibility, handleChange }) => {
 
  return (
    <Container>
      <ContentContainer>
        <WeatherDetails 
          title={'Humidity'}
          data={`${temp.humidity}%`}
        />
        <WeatherDetails 
          title={'Feels Like'}
          data={`${Math.floor(temp.feels_like)} °F`}
        />
        <WeatherDetails 
          title={'pressure'}
          data={`${Math.floor((temp.pressure / 3386) * 100)} hg`}
        />
        <WeatherDetails 
          title={'Wind'}
          data={`${Math.floor(wind.speed * 2.237)} mph`}
        />
        <WeatherDetails 
          title={'Visibility'}
          data={`${Math.floor(visibility / 1609)} mi`}
        />
        <WeatherDetails 
          title={'Weather'}
          data={weather}
        />
        <Input type='text' placeholder='Enter a city' onKeyDown={handleChange} />
      </ContentContainer>
    </Container>
  )
}