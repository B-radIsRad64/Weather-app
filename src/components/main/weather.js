import styled from 'styled-components'

const Container = styled.div`
  color: #373D3F;
  font-size: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 28rem;
  font-weight: bold;
  margin-left: 1rem;
`
const Temp = styled.div`
  font-size: 3.8rem;
  font-weight: bold;
`
export const Weather = ({weather, temp, icon}) => {

  return (
    <Container>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='weather icon' />
      <Temp>{`${Math.floor(temp.temp)}°F`}</Temp>
      <div>{weather}</div>
    </Container>
  )
}