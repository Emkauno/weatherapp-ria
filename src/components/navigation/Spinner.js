import React from 'react'
import { SpinnerContainer } from '../componentStyles/SpinnerStyles'


const Spinner = () => {
  return (
      <SpinnerContainer>
        <div className="lds-dual-ring"></div>
      </SpinnerContainer>
  )
}

export default Spinner
