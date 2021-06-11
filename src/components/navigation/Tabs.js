import React from 'react'
import {
  TabsWrapper,
  TabsContainer,
  LinkElement
} from '../componentStyles/TabsStyles'


const Tabs = () => {

  return (
    <TabsWrapper>
      <TabsContainer>
        <LinkElement to="/" exact={true}>Rio de Janeiro</LinkElement>
        <LinkElement to="/beijing">Beijing</LinkElement>
        <LinkElement to="/losangeles">Los Angeles</LinkElement>
      </TabsContainer>
    </TabsWrapper>
  )
}

export default Tabs
