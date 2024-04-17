import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 24rem;
  max-width: 48rem;
`;

const Input = styled.input`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 3rem);
  height: 6vh;
  border-radius: 3rem;
  padding: 0 3rem;
  color: black;
  font-size: 1rem;
  ::placeholder {
    color: gray;
    font-size: 0.8rem;
  }
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: black;
  position: absolute;
  right: 1rem;
  width: 2rem;
  cursor: pointer;
`;

const Search: React.FC = () => {
  return (
    <Wrapper>
      <Input placeholder="검색어를 입력하세요" />
      <Text>검색</Text>
    </Wrapper>
  );
};

export default Search;
