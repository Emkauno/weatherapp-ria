import React from 'react'
import WeatherIcon from './WeatherIcon'
import {
  CardContainer,
  InfoContainer,
  Date,
  Comment,
  WeatherInfo,
  MinMax,
  Icon,
  BgIcon
} from './componentStyles/DailyCardStyles'

import Moment from 'react-moment'

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
