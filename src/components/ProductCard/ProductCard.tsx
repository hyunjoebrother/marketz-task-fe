import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 10rem;
  max-width: 16rem;
  height: 20rem;
  background-color: skyblue;
  padding: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: green;
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: black;
`;

const ProductCard: React.FC = () => {
  return (
    <Wrapper>
      <ImageWrapper>IMAGE</ImageWrapper>
      <TextWrapper>
        <Text>브랜드</Text>
        <Text>이름</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default ProductCard;
