import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TabsContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`


const Tabs = () => {
  return (
    <TabsContainer>
      <Link to={`/riodejaneiro`}>Rio de Janeiro</Link>
      <Link to={`/beijing`}>Beijing</Link>
      <Link to={`/losangeles`}>Los Angeles</Link>
    </TabsContainer>
  )
}

export default Tabs
