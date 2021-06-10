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
 justify-content: space-around;
 border: 1px solid var(--Text-tertiary);
 border-radius: 5px;
 position: relative;
 height: 120px;

 &:not(:last-child){
   margin-bottom: 10px;
 }
 @media(max-width:850px){
  height: 125px;
  padding-left: 0;
  justify-content: flex-start;

 }
`
const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  order: -1;
  z-index: 1;
`
const Date = styled.h1`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Text-primary);
  
  @media(max-width:850px){
    font-size: 0.9em;
    white-space: nowrap;
    position: absolute;
    right: 10px;
    top: 5px;
  }
  
`
const Comment = styled.p`
  text-align: center;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Ria-orange);
  @media(max-width:850px){
    font-size: 0.75em;
    white-space: nowrap;
    position: absolute;
    right: 10px;
    bottom: 5px;
  }
`
const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MinMax = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.2em;
  padding-left: 5px;
  width: 160px;
  z-index: 1;

  @media(max-width:850px){
    font-size: 1.1em;
    justify-content: flex-end;
    padding-right: 10px;
    align-items: center;
    padding-left: 20px;
    flex-direction: row;
    line-height: 25px;
    font-weight: bold;
    color: var(--Text-secondary)
  }
  img {
    width: 25px;
    margin-left: 5px;
    margin-bottom: 5px;
    opacity: 60%;
    @media(max-width:850px){
      width: 20px;
      margin-bottom: 3px;
      margin-left: 3px;
      
    }
  }
  span {
    margin: 0 5px;
    color: var(--Text-secondary);
    &:first-child{
      font-weight: normal;
    }
    &:nth-child(2){
      color: var(--Light-orange);
    }
    &:nth-child(3){
      font-weight: normal;
    }
  }
`
const Icon = styled.div`
  @media(max-width:850px){
    position: absolute;
    z-index: 1;
    img {
      width: 100px;
      opacity: 80%;
    }
  }
`
const BgIcon = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  z-index: 0;
  img {
    position: absolute;
    top: -40px;
    left: -50px;
    width: 200px;
    opacity: 30%;
    @media(max-width:850px){
      left: -80px;
    }
  }
`

const WeatherCard = ({weatherIcon, minTemp, maxTemp, rh, date, comment}) => {

  
  return (
    <CardContainer>
      <Icon>
        <WeatherIcon weatherIcon={weatherIcon}/>
      </Icon>
      <BgIcon>
        <WeatherIcon weatherIcon={weatherIcon}/>
      </BgIcon>
      <InfoContainer>
        <Date><Moment format="ddd, D MMM">{date}</Moment></Date>
        <Comment>{comment}</Comment>
      </InfoContainer>
      <WeatherInfo>
        <MinMax>{minTemp}<span>°C</span> <span>|</span> {maxTemp}<span>°C</span></MinMax>
        <MinMax>{rh}<img alt="rh" src="./rh.svg"/></MinMax>
      </WeatherInfo>
    </CardContainer>
  )
}

export default WeatherCard
