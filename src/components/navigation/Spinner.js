import React from 'react'
import styled from 'styled-components'

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .lds-dual-ring {
    display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 6px solid var(--Ria-orange);
  border-color: var(--Ria-orange) transparent var(--Ria-orange) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`
const Spinner = () => {
  return (
      <SpinnerContainer>
        <div className="lds-dual-ring"></div>
      </SpinnerContainer>
  )
}

export default Spinner
