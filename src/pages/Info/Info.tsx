import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header/Header";
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
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  const fetchProductInfo = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product info:", error);
    }
  };

  useEffect(() => {
    fetchProductInfo();
    // eslint-disable-next-line
  }, [id]);

  if (!product) {
    return null; // 상품 정보가 없을 경우 아무것도 렌더링하지 않습니다.
  }

  return (
    <div>
      <Header />
      <Wrapper>
        <Button path="/" text="목록으로 돌아가기" />
        <ListWrapper>
          {product.id}번째 상품
          <br />
          {product.title}
          <br />
          {product.description}
          <br />
          {product.brand}
          <br />
          {product.price}
        </ListWrapper>
      </Wrapper>
    </div>
  );
};

export default Info;
