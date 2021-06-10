import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import WeatherContainer from './components/WeatherContainer'
import WebFont from 'webfontloader'

const GlobalStyle = createGlobalStyle`
  :root {
    --Ria-orange: #ff6100;
    --Text-primary: #001133cc;
    --Text-secondary: #00113399;
    --Text-tertiary: #0011334d;
    --White: #ffffff;
    --Light-orange: #ff77114d;
    --Lighter-orange: #ff771120;
    --Light-gray: #00113326;
    --Lighter-gray: #00113308;
  }

  body {
    font-family: 'Nunito Sans';
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    background: linear-gradient(to bottom,var(--White), var(--Lighter-orange), 80%);

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
     height: 0.6em;
     width: 0.6em;
     &-track {
      background: var(--White)
     }
     &-thumb {
      background-color: var(--Light-orange);
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
      <Router>
        <GlobalStyle/>
        <Switch>
          <Route exact path="/">
            <WeatherContainer cityName="Rio de Janeiro, BR"/>
          </Route>
          <Route path="/beijing">
            <WeatherContainer cityName="Beijing, CN"/>
          </Route>
          <Route path="/losangeles">
            <WeatherContainer cityName="Los Angeles, US"/>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
