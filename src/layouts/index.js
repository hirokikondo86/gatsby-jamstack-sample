import React from 'react';
import styled from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/header';
import SEO from '../components/SEO';

export default ({ children }) => {
  return (
    <_Wrapper>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
