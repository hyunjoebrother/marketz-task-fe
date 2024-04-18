import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2.4rem 0.8rem 2.4rem;
  background-color: #4f5153;
  border-radius: 20rem;
  cursor: pointer;
`;

const Text = styled.div`
  font-weight: 700;
  color: white;

  @media screen and (max-width: 359px) {
    font-size: 0.68rem;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    font-size: 0.88rem;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Button;
