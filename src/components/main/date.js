import styled from 'styled-components'

const Container = styled.div`
  color: #373D3F;
  font-size: 1.8rem;
  padding-left: .5rem;
  font-weight: 500;
`
const DayOfWeek = styled.div`
  font-weight: bold;
  font-size: 2.4rem;
`
export const CurrentDate = ({city}) => {
  
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const current = new Date()
  let day = weekday[current.getDay()]
  let getDate = current.toString()
  let getMonth = getDate.split(' ')
  const date = `${current.getDate()} ${getMonth[1]} ${current.getFullYear()}`;
  
  return (
    <Container>
      <DayOfWeek>{day}</DayOfWeek>
      <div>{date}</div>
      <div>{city}</div>
    </Container>
  )
}