import React from 'react'
import styled from 'styled-components'

  const Image = styled.img`
  width: 50%;
  `

const weatherIcon = ({weatherIcon}) => {

  const iconPath = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`

  return (
    <Image alt="icon" src={iconPath}/>    
  )
}

export default weatherIcon
