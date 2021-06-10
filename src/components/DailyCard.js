import React from 'react'
import styled from 'styled-components'
import WeatherIcon from './weatherIcon'

import Moment from 'react-moment'

const CardContainer = styled.div`
 width: 100%;
 background: var(--White);
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 border: 1px solid var(--Light-orange);
 border-radius: 5px;
 padding: 0 50px;
 max-height: 125px;
 &:not(:last-child){
   margin-bottom: 10px;
 }
 @media(max-width: 850px){
   flex-direction: row-reverse;
   flex-wrap: wrap;
   padding: 10px;
 }
`
const InfoContainer = styled.div`
  width: 50%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  order: -1;
  @media(max-width: 850px){
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    order: -1;
 }
`
const Date = styled.h1`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--Text-primary);
  @media(max-width: 850px){
    width: 50%;
    font-size: 1em;
    justify-content: flex-start;
 }
  
`
const Comment = styled.p`
  text-align: center;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Ria-orange);
  @media(max-width: 850px){
    width: 50%;
    font-size: 0.9em;
    text-align: center;
 }
`
const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MinMax = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2em;
  padding-left: 5px;
  img {
    width: 30px;
    margin-left: 5px;
    margin-bottom: 5px;
    @media(max-width: 850px){
      width: 20px;
      height: 20px;

 }
  }
  @media(max-width: 850px){
    justify-content: flex-start;
    font-size: 0.9em;
    padding-left: 20px;
 }
`


const WeatherCard = ({weatherIcon, minTemp, maxTemp, rh, date, comment}) => {

  
  return (
    <CardContainer>
      <WeatherIcon weatherIcon={weatherIcon}/>
      <InfoContainer>
        <Date><Moment format="ddd, D MMM">{date}</Moment></Date>
        <Comment>{comment}</Comment>
      </InfoContainer>
      <WeatherInfo>
        <MinMax>{minTemp}°C | {maxTemp}°C</MinMax>
        <MinMax> {rh} <img alt="rh" src="./rh.svg"/></MinMax>
      </WeatherInfo>
    </CardContainer>
  )
}

export default WeatherCard
