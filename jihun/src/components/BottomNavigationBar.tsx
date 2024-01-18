import React from 'react'
import styled from 'styled-components'

const BottomNavBarWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 30vh;
  background-color: var(--white);
  border: 1px solid var(--gray03);
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
`
export default function BottomNavigationBar() {
  return (
    <BottomNavBarWrapper>

    </BottomNavBarWrapper>
  )
}
