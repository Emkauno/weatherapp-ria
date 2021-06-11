import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AnimatePresence } from 'framer-motion'
import { Container, Title, HourlyForecastContainer, HourItems, DailyForecastContainer, DailyItems } from './componentStyles/WeatherContainerStyles'
import Spinner from './navigation/Spinner'
import Tabs from './navigation/Tabs'
import WeatherCard from './WeatherCard'
import DailyCard from './DailyCard'

const WeatherContainer = ({cityName, slug, cityLoad, setCityLoad, hourlyData, dailyData, setHourlyData, setDailyData}) => {
  const [dailyLoading, setDailyLoading] = useState(true)
  const [hourlyLoading, setHourlyLoading] = useState(true)


  const accessKey = 'cb821d89227f4406bed149794eb205fa';
  const baseUrl = 'https://api.weatherbit.io/v2.0/';


  const hourlyForecast = `${baseUrl}forecast/hourly?city=${cityName}&hours=6&tz=local&key=${accessKey}`
  const dailyForecast = `${baseUrl}forecast/daily?city=${cityName}&days=7&key=${accessKey}` 


  useEffect(()=>{
    if (!cityLoad[slug]) {
      setHourlyLoading(true)
      axios.get(hourlyForecast)
      .then(({ data }) => setTimeout(()=>{
        setHourlyData({...hourlyData,[slug]:data})
        setCityLoad({...cityLoad,[slug]:true})
      },10))
      .then(()=>{
        setTimeout(()=>{
          setHourlyLoading(false)
        },1000)
      })
    }
  },[hourlyForecast])

  useEffect(()=>{
    if (!cityLoad[slug]) {
    setDailyLoading(true)
    axios.get(dailyForecast)
    .then(({ data }) => setTimeout(()=>{
      setDailyData({...dailyData,[slug]:data})
      setCityLoad({...cityLoad,[slug]:true})
    },10))
    .then(()=>{
      setTimeout(()=>{
        setDailyLoading(false)
      },1000)
    })
  }
  },[dailyForecast])

  return (
    <>
     <Container>
        <Tabs cityData={cityName}/>
        <Title>Next hours in <span>{cityName}</span></Title>
        <HourlyForecastContainer>
          <AnimatePresence exitBeforeEnter>
            {!hourlyLoading && hourlyData ? <HourItems initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} key="hour-items">
              {hourlyData[slug].data.map((item,i) => (
                <WeatherCard  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} item={item} key={i} weatherTemp={item.temp} weatherRh={item.rh} weatherIcon={item.weather.icon} timeStamp={item.timestamp_local}/>
              ))}
            </HourItems> : <Spinner/>}
          </AnimatePresence>
        </HourlyForecastContainer>
        <Title>Next 7 days in <span>{cityName}</span></Title>
        <DailyForecastContainer>
          <AnimatePresence exitBeforeEnter>
            {!dailyLoading && dailyData ? <DailyItems initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} key="daily-items">
              {dailyData[slug].data.map((item,i) => (
                <DailyCard initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} item={item} key={i} weatherIcon={item.weather.icon} minTemp={item.min_temp} maxTemp={item.max_temp} rh={item.rh} date={item.datetime} comment={item.weather.description}/>
              ))}
            </DailyItems> : <Spinner/>}
          </AnimatePresence>
          </DailyForecastContainer>
      </Container>
    </>
  )
}

export default WeatherContainer
