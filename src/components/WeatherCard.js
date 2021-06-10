import React from 'react'
import styled from 'styled-components'

import WeatherIcon from './weatherIcon'

const CardContainer = styled.div`
  min-width: 120px;
  background: var(--White);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 5px 0;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 119, 51, 0.3);
  transition: background .3s ease;
  &:not(:last-child){
    margin-right: 10px;
  }
  &:hover{
    background: var(--Lighter-orange);
  }
`
const Temp = styled.h1`
  font-size: 1.2em;
  color: #aaa;
  margin-bottom: 3px;
  color: var(--Ria-orange);
  border-bottom: 1px solid var(--Light-orange);
  pointer-events: none;
`
const Rh = styled.h3`
  font-size: 1em;
  color: var(--Text-primary);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  img {
    margin-left: 2px;
    margin-bottom: 2px;
    opacity: 80%;
  }
`
const Timestamp = styled.h3`
  font-size: 0.7em;
  color: var(--Text-secondary);
  pointer-events: none;
`

const WeatherCard = ({weatherTemp, weatherRh, weatherIcon, timeStamp}) => {

  const LocalTime = timeStamp.substring(11,16)
  const Meridiem =  12 > parseInt(LocalTime) > 0 ? 'AM' : 'PM' 

  return (
    weatherTemp && <CardContainer>
    <Temp>{weatherTemp}°C</Temp>
    <Rh>{weatherRh} <img alt="rh" src="./rh.svg"/></Rh>
    <WeatherIcon weatherIcon={weatherIcon}/>
    <Timestamp>{LocalTime} {Meridiem}</Timestamp>
  </CardContainer>
  )
}

export default WeatherCard
