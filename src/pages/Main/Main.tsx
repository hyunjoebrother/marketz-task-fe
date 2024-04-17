import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import ProductCard from "../../components/ProductCard/ProductCard";

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

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <Search />
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

export default Main;
