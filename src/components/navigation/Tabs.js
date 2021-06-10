import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TabsWrapper = styled.div`
  width: 100%;
  height: 70px;
  color:var(--Text-primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 700px){
    height: 100px;
    flex-direction: column;
    margin-bottom: 20px;
  }
`
const TabsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 1em;
  a {
    text-decoration: none;
    border: 1px solid var(--Light-gray);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    background: var(--White);
    @media(max-width: 700px){
      height: 30px;  
  }
  }
  @media(max-width: 700px){
    width: 100%;
    font-size: 0.8em;
  }
`
const SearchTab = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  @media(max-width: 700px){
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-right: 0;
  }
  input {
    width: 50%;
    padding: 10px 25px;
    border-radius: 10px;
    border: 2px solid var(--Ria-orange);
    font-family: 'Nunito Sans';
    font-weight: bold;
    transition: all .3s ease;
    &:focus {
      border: 1px solid var(--Ria-orange);
      outline: none;
    }
    @media(max-width: 700px){
      margin-top: 15px;
      width: 100%;
  }
  }
  p {
    width: 50%;
    font-size: 0.8em;
    color: var(--Text-secondary);
    text-align: center;
    line-height: 30px;
    @media(max-width: 700px){
      margin-top: 0px;
      
  }
    
  }

`
const SearchIcon = styled.div`
  position: absolute;
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -15px;
  img {
    width: 50%;
  }
  @media(max-width: 700px){
   right: 0;
   top: -7px;
  }
`

const Tabs = () => {


  return (
    <TabsWrapper>
      <TabsContainer>
        <Link to="/">Rio de Janeiro</Link>
        <Link to="/beijing">Beijing</Link>
        <Link to="/losangeles">Los Angeles</Link>
      </TabsContainer>
      <SearchTab>
         <input/>
        <p>Search for my location</p>
        <SearchIcon>
          <img src="./search.svg" alt="search icon" />
        </SearchIcon>
      </SearchTab>
    </TabsWrapper>
  )
}

export default Tabs
