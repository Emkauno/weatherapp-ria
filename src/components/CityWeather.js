import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import WeatherCard from './WeatherCard'

const Container = styled.div`
  width: 100%;
  min-width: 500px;
  max-width: 1000px;
  margin: 0 auto;
  background: var(--White);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media(max-width: 700px){
    max-width: 350px;
    min-width: auto;
  }
`
const Title = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--Text-secondary);
  span {
    font-weight: bold;
    margin: 0;
    padding: 0;
    margin-left: 10px;
    color: var(--Text-primary);
  }
`
const HForecastContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
`
const HourItems = styled.div`
  width: 100%;
  overflow-x: scroll;
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: flex-start;
  padding: 10px 0;
`

const DayForecast = styled.div`
  width: 100%;
  height: 100px;
  background-color: rosybrown;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CityWeather = ({cityName}) => {

  const [cityData, setCityData] = useState(null)

  const accessKey = 'a0e178e53c6e4077834d7d4b21b6311b';
  const baseUrl = 'http://api.weatherbit.io/v2.0/';


  const hourlyForecast = `${baseUrl}forecast/hourly?city=${cityName}&hours=8&tz=local&key=${accessKey}`


  useEffect(()=>{
     axios.get(hourlyForecast)
    .then(({ data }) => setCityData(data))
  },[hourlyForecast])

  return (
    <>
      {/* <input type="text" onChange={(e)=> cityHandler(e.target.value)} /> */}
      <Container>
        <HForecastContainer>
          <Title>Next hours in <span>{cityName}</span></Title>
          <HourItems>
          { cityData ? cityData.data.map((item,i) => {
              return <WeatherCard item={item} key={i} weatherTemp={cityData.data[i].temp} weatherRh={cityData.data[i].rh} weatherIcon={cityData.data[i].weather.icon} timeStamp={cityData.data[i].timestamp_local}/>
            }) : 'loading'} 
          </HourItems>
        </HForecastContainer>
        <DayForecast>Dia</DayForecast>
      </Container>    
    </>
  )
}

export default CityWeather
