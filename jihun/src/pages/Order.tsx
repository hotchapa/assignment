import React from 'react'
import styled from 'styled-components'
import TopNavigationBar from '../components/TopNavigationBar'
import BottomNavigationBar from '../components/BottomNavigationBar'
const OrderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export default function Order() {
  return (
    <>
    <TopNavigationBar></TopNavigationBar>
    <OrderWrapper>오더오더</OrderWrapper>
    <BottomNavigationBar></BottomNavigationBar>
    </>
  )
}
