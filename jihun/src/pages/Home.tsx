import React from 'react'
import styled from 'styled-components'
import TopNavigationBar from '../components/TopNavigationBar'
import BottomNavigationBar from '../components/BottomNavigationBar'
const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const HomeHeader = styled.h1`
  font-size: 3vw;
  cursor: pointer;
  user-select: none;
  :hover{
    color : var(--gray03)
  }
`


export default function Home() {
  return (
    <>
    <HomeWrapper>
      <HomeHeader>
        주문 하러가기
      </HomeHeader>
    </HomeWrapper>
    </>
  )
}
