import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const TabsWrapper = styled.div`
  width: 100%;
  color:var(--Text-primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
`
export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 1em;
  a {
    text-decoration: none;
    border: 1px solid var(--Light-gray);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 10px;
    background: var(--Lighter-gray);
    white-space:nowrap;
    font-weight: bold;
    &:not(:last-child){
      margin-right: 20px;
    }

  }
  @media(max-width: 400px){
    width: 100%;
    font-size: 0.73em;
    justify-content: center;
  }

`
export const LinkElement = styled(NavLink)`
&.active {
  background:var(--White);
  border: 2px solid var(--Light-gray);
}

`