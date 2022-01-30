import React from "react";
import './App.css';

// components
import ProductPage from './pages/ProductPage';

// lib
import styled from 'styled-components'

function App() {
  return (
    <PageWrap>
      <ProductPage/>
    </PageWrap>
  );
}

const PageWrap = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  outline: none;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgb(170, 170, 170));
`

export default App;