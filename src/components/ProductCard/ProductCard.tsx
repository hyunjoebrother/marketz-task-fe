import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  brand: string;
  thumbnail: string;
}

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

const ImageWrapper = styled.img`
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

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  thumbnail,
  brand,
  title,
  price,
}) => {
  return (
    <Link to={`/info/${id}`}>
      <Wrapper>
        <ImageWrapper src={thumbnail} />
        <TextWrapper>
          <Text>{brand}</Text>
          <Text>{title}</Text>
        </TextWrapper>
        <Text>{price}</Text>
      </Wrapper>
    </Link>
  );
};

export default ProductCard;
