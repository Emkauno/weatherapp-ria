import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  background: var(--Lighter-gray);
  border-radius:8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid var(--Lighter-gray2);
`

export const Title = styled(motion.div)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--Text-secondary);
  padding: 0 10px;
  font-size: 1.5em;
  font-weight: bold;
  margin: 25px 0;
  @media(max-width: 850px){
    font-size: 1.35em;
  }
  @media(max-width: 600px){
    font-size: 1.2em;
  }
  @media(max-width: 400px){
    font-size: 1.1em;
  }
  span {
    margin: 0;
    padding: 0;
    margin-left: 5px;
    color: var(--Ria-orange);
  }

`
export const HourlyForecastContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: -25px;
  min-height: 195px;
`
export const HourItems = styled(motion.div)`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
`

export const DailyForecastContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 400px;
  overflow-y: scroll;
`
export const DailyItems = styled(motion.div)`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: flex-start;
`