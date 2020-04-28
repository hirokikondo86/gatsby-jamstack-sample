import React from 'react';
import styled from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/header';

export default ({ children }) => (
  <Wrapper>
    <Header />
    <MarginBtm />
    {children}
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const MarginBtm = styled.div`
  margin-bottom: 50px;
`;
