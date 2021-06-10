import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Spinner from './navigation/Spinner'
import Tabs from './navigation/Tabs'
import WeatherCard from './WeatherCard'
import DailyCard from './DailyCard'





const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 700px;
  max-width: 890px;
  background: var(--Lighter-gray);
  border-radius:8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid var(--Light-gray);
  @media(max-width: 900px){
    max-width: 680px;
    width: 100%;
    min-width: 300px;
  }
  @media(max-width: 700px){
    max-width: 300px;
    width: 100%;
    min-width: unset;
  }
`
const Title = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--Text-secondary);
  padding: 0 10px;
  font-size: 1.2em;
  @media(max-width: 850px){
    font-size: 1em;
  }
  span {
    font-weight: bold;
    margin: 0;
    padding: 0;
    margin-left: 5px;
    color: var(--Ria-orange);
  }

`
const HourlyForecastContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`
const HourItems = styled.div`
  width: 100%;
  overflow-x: scroll;
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: flex-start;
  padding: 10px;
`

const DailyForecastContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0 0 0; 
  padding: 0 10px 10px 10px;
  height: 400px;
  overflow-y: scroll;
`
const DailyItems = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: flex-start;
`




const WeatherContainer = ({cityName}) => {

  const [isLoading, setIsLoading] = useState(true)
  const [hourlyData, setHourlyData] = useState(null)
  const [dailyData, setDailyData] = useState(null)


  const accessKey = 'cb821d89227f4406bed149794eb205fa';
  const baseUrl = 'https://api.weatherbit.io/v2.0/';


  const hourlyForecast = `${baseUrl}forecast/hourly?city=${cityName}&hours=8&tz=local&key=${accessKey}`
  const dailyForecast = `${baseUrl}forecast/daily?city=${cityName}&days=7&key=${accessKey}` 


  useEffect(()=>{
     axios.get(hourlyForecast)
    .then(({ data }) => setHourlyData(data))
    .then(setIsLoading(false))
  },[hourlyForecast])

  useEffect(()=>{
     axios.get(dailyForecast)
    .then(({ data }) => setDailyData(data))
    .then(setIsLoading(false))
  },[dailyForecast])

  return (
    <>
     {isLoading ? <Spinner/> :     
     <Container>
        <Tabs cityData={cityName}/>
        <HourlyForecastContainer>
          <Title>Next hours in <span>{cityName}</span></Title>
          <HourItems>
            { hourlyData ? hourlyData.data.map((item,i) => {
                return <WeatherCard item={item} key={i} weatherTemp={hourlyData.data[i].temp} weatherRh={hourlyData.data[i].rh} weatherIcon={hourlyData.data[i].weather.icon} timeStamp={hourlyData.data[i].timestamp_local}/>
              }) : <Spinner/>} 
          </HourItems>
        </HourlyForecastContainer>
        <Title>Next 7 days in <span>{cityName}</span></Title>
        <DailyForecastContainer>
          <DailyItems>
            { dailyData ? dailyData.data.map((item,i) => {
                return <DailyCard item={item} key={i} weatherIcon={dailyData.data[i].weather.icon} minTemp={dailyData.data[i].min_temp} maxTemp={dailyData.data[i].max_temp} rh={dailyData.data[i].rh} date={dailyData.data[i].datetime} comment={dailyData.data[i].weather.description}/>
              }) : <Spinner/>} 
            </DailyItems>
          </DailyForecastContainer>
      </Container> }
    </>
  )
}

export default WeatherContainer
