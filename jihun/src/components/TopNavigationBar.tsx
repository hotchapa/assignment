import React from 'react'
import styled from 'styled-components'

const TopNavBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: var(--dark01);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

`
export default function TopNavigationBar() {
  return (
    <TopNavBarWrapper>NavigationBar</TopNavBarWrapper>
  )
}
