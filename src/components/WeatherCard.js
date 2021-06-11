import React from 'react'
import {
  CardContainer,
  Temp,
  Rh,
  Timestamp,
  container,
  item
} from './componentStyles/WeatherCardStyles'


import WeatherIcon from './WeatherIcon'


const WeatherCard = ({weatherTemp, weatherRh, weatherIcon, timeStamp}) => {

  const LocalTime = timeStamp.substring(11,16)
  const Meridiem =  12 > parseInt(LocalTime) > 0 ? 'AM' : 'PM' 

  return (
    weatherTemp && <CardContainer variants={container}
    initial="hidden"
    animate="show">
    <Temp variants={item}>{weatherTemp}<span>°C</span></Temp>
    <Rh variants={item}>{weatherRh} <img alt="rh" src="./rh.svg"/></Rh>
    <WeatherIcon weatherIcon={weatherIcon} variants={item}/>
    <Timestamp variants={item}>{LocalTime} {Meridiem}</Timestamp>
  </CardContainer>
  )
}

export default WeatherCard
