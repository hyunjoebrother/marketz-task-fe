import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background: gray;
`;

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Text>HEADER</Text>
    </Wrapper>
  );
};

export default Header;
