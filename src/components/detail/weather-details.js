import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: #292C30;
  width: 8rem;
  padding: 1rem;
  margin: 1rem;
`
const TitleContainer = styled.div`
  display: flex;
`
const Title = styled.div`
  font-size: 1.8rem;
  color: #ffffff;
`
const Data = styled.div`
  font-size: 2.3rem;
  color: #ffffff;
  padding-top: 1rem;
`
export const WeatherDetails = ({ title, data }) => {

  return (
    <Container>
      <TitleContainer>
        <img></img>
        <Title>{title}</Title>
      </TitleContainer>
      <Data>{data}</Data>
    </Container>
  )
}