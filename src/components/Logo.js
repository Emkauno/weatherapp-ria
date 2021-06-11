import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'

const LogoContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
  img {
    width: 100px;
    @media(max-width: 500px){
      width: 80px;
    }
  }
`

const Logo = () => {
  return (
    <LogoContainer>
      <img alt="weatherapp logo" src="./logo.svg"/>
    </LogoContainer>
  )
}

export default Logo
