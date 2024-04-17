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
  padding: 3rem 0 5rem 0;
`;

const Input = styled.input`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 3rem);
  height: 6vh;
  border-radius: 3rem;
  border: 0.12rem solid #4f5153;
  padding: 0 2rem;
  color: #4f5153;
  font-size: 1.2rem;
  &::placeholder {
    color: gray;
    font-size: 0.88rem;
  }
  &:focus {
    border: 0.16rem solid #4f5153;
  }
`;

const Text = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #4f5153;
  position: absolute;
  right: 1rem;
  width: 2rem;
  cursor: pointer;

  &:hover {
    color: #3474ae;
    font-weight: 900;
  }
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
