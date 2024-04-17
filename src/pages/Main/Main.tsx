import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8rem;
`;

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <Search />
      </Wrapper>
    </div>
  );
};

export default Main;
