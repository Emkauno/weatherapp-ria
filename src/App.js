import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import WeatherContainer from './components/WeatherContainer'
import WebFont from 'webfontloader'
import Spinner from './components/navigation/Spinner'

const GlobalStyle = createGlobalStyle`
  :root {
    --Ria-orange: #ff6100;
    --Text-primary: #001133cc;
    --Text-secondary: #00113399;
    --White: #ffffff;
    --Light-orange: #ff77114d;
    --Lighter-orange: #ff771120;
  }

  body {
    font-family: 'Nunito Sans';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
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
     height: 0.3em;
     width: 0.3em;
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

  const [isLoading, setIsLoading] = useState(false)

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
            {isLoading ? <Spinner/> : <WeatherContainer cityName="Rio de Janeiro, BR"/>}
          </Route>
          <Route path="/beijing">
            {isLoading ? <Spinner/> : <WeatherContainer cityName="Beijing, CN"/>}
          </Route>
          <Route path="/losangeles">
            {isLoading ? <Spinner/> : <WeatherContainer cityName="Los Angeles, US"/>}
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
