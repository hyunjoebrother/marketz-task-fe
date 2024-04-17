import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(90.1deg, #3c3, #3438ff 104.76%);

  @media screen and (max-width: 359px) {
    height: 6.8vh;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    height: 7.2vh;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    height: 7.6vh;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    height: 8vh;
  }

  @media screen and (min-width: 1024px) {
    height: 8.4vh;
  }

  @media screen and (min-width: 1280px) {
    height: 10vh;
  }
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
`;

const Text = styled.h3`
  font-weight: 700;
  color: white;

  @media screen and (max-width: 359px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 2.4rem;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <HeaderLink to="/">
        <Text>Marketz</Text>
      </HeaderLink>
    </Wrapper>
  );
};

export default Header;
