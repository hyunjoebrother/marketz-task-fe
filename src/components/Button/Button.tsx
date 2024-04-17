import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
  path: string;
  text: string;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 1rem;
  background-color: red;
  border-radius: 20rem;
  padding: 1rem;
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: white;
`;

const Button: React.FC<ButtonProps> = ({ path, text }) => {
  return (
    <Link to={path}>
      <Wrapper>
        <Text>{text}</Text>
      </Wrapper>
    </Link>
  );
};

export default Button;
