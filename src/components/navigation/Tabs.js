import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TabsWrapper = styled.div`
  width: 100%;
  height: 60px;
  background: var(--White);
  color:var(--Text-primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const TabsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
  }
  @media(max-width: 850px){
    width: 100%;
  }
`
const SearchTab = styled.div`
  width: 50%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 20px;
  position: relative;
  input {
    width: 50%;
    padding: 0 25px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid var(--Text-secondary);
    text-align: center;
    font-family: 'Nunito Sans';
    font-weight: bold;
    transition: all .3s ease;
    &:focus {
      border: 1px solid var(--Ria-orange);
      outline: none;
    }
  }
  p {
    width: 50%;
    font-size: 0.8em;
    color: var(--Text-secondary);
    text-align: center;
    line-height: 20px;
  }
`
const SearchIcon = styled.div`
  position: absolute;
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5px;
  img {
    width: 50%;
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
