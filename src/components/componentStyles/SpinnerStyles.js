import styled from 'styled-components'
import { motion} from 'framer-motion'

export const SpinnerContainer = styled(motion.div)`
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