import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardContainer = styled(motion.div)`
background: var(--White);
width: 15%;
border-radius: 4px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 20px;
border: 1px solid var(--Lighter-gray2);
transition: background .3s ease;
margin-bottom: 25px;
&:hover{
  background: var(--Lighter-orange);
}
@media(max-width: 800px){
  width: 30%;
}
@media(max-width: 400px){
  width: 46%;
}

`
export const Temp = styled(motion.h1)`
font-size: 1.4em;
font-weight: normal;
color: #aaa;
color: var(--Ria-orange);
pointer-events: none;
span {
  font-size: 0.8em;
  margin-left: 2px;
  color: var(--Ria-orange)
}
`
export const Rh = styled(motion.h3)`
font-size: 1em;
color: var(--Text-primary);
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
pointer-events: none;
img {
  width: 18px;
  margin-left: 2px;
  margin-bottom: 2px;
  opacity: 60%;
}
`
export const Timestamp = styled(motion.h3)`
font-size: 0.7em;
color: var(--Text-secondary);
pointer-events: none;
`
export const container = {
hidden: { opacity: 0 },
show: {
  opacity: 1,
  transition: {
    staggerChildren: 0.15
  }
}
}

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}