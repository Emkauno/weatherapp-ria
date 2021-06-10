import React, { useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import CityWeather from './components/CityWeather'
import WebFont from 'webfontloader'

const GlobalStyle = createGlobalStyle`
  :root {
    --Ria-orange: #ff6100;
    --Text-primary: #001133cc;
    --Text-secondary: #00113399;
    --White: #ffffff;
    --Light-orange: #ff77114d;
  }

  body {
    font-family: 'Nunito Sans';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    height: 100vh;
    margin: 0 auto;
    background: #ccc;

    p {
      line-height: 24px;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--Text-primary);
    &::-webkit-scrollbar {
     height: 0.3em;
     &-track {
      background: var(--White)
     }
     &-thumb {
      background-color: var(--Ria-orange);
      border-radius: 8px;

     }
    }
  }
`;


function App() {

  useEffect(() => {
    WebFont.load({
      google:{
        families:['Nunito Sans']
      }
    })
  })

  return (
    <div className="App">
      <GlobalStyle/>
      <h1>NAV</h1>
      <CityWeather cityName="Santiago de Chile"/>
    </div>
  );
}

export default App;
