import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 8rem;
`;

const ListWrapper = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 2rem;
`;

const Info: React.FC = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <Button path="/" text="목록으로 돌아가기" />
        <ListWrapper>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ListWrapper>
      </Wrapper>
    </div>
  );
};

export default Info;
