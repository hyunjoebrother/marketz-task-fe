import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  brand: string;
  thumbnail: string;
  onClick: () => void;
}

const CardLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid grey;
  border-radius: 1rem;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 0.2rem 0.2rem rgba(0, 0, 0, 0.23);
  }
`;

const ImageWrapper = styled.div`
  @media screen and (max-width: 359px) {
    width: 16rem;
    height: 8.4rem;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    width: 20rem;
    height: 11.2rem;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    width: 22rem;
    height: 11.6rem;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    width: 20rem;
    height: 12rem;
  }

  @media screen and (min-width: 1024px) {
    width: 24rem;
    height: 12.8rem;
  }

  @media screen and (min-width: 1280px) {
    width: 36rem;
    height: 20rem;
  }
`;

const ImageSrc = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
`;

const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

const TextRow = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  padding-left: 2.8rem;
`;

const TextBrand = styled.p`
  font-weight: 500;
  color: grey;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
  align-items: flex-end;

  ${TextWrapper}:hover & {
    color: #3474ae;
    font-weight: 700;
  }

  @media screen and (max-width: 359px) {
    font-size: 0.76rem;
    max-width: 5em;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    font-size: 0.8rem;
    max-width: 6em;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    font-size: 0.84rem;
    max-width: 6em;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    font-size: 0.8rem;
    max-width: 6em;
  }

  @media screen and (min-width: 1024px) {
    font-size: 0.84rem;
    max-width: 6em;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1rem;
    max-width: 8em;
  }
`;

const TextTitle = styled.p`
  font-weight: 700;
  color: #4f5153;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;

  ${TextWrapper}:hover & {
    color: #3474ae;
    font-weight: 700;
  }

  @media screen and (max-width: 359px) {
    font-size: 1.1rem;
    max-width: 8em;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    font-size: 1.2rem;
    max-width: 10em;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    font-size: 1.4rem;
    max-width: 10em;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    font-size: 1.2rem;
    max-width: 10em;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.4rem;
    max-width: 10em;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.6rem;
    max-width: 16em;
  }
`;

const TextPrice = styled.p`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-weight: 400;
  color: #4f5153;
  padding-left: 2.8rem;

  @media screen and (max-width: 359px) {
    font-size: 0.88rem;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.32rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.36rem;
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  thumbnail,
  brand,
  title,
  price,
  onClick,
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <CardLink to={`/info/${id}`} onClick={handleClick}>
      <Wrapper>
        <ImageWrapper>
          <ImageSrc src={thumbnail} />
        </ImageWrapper>
        <TextWrapper>
          <TextRow>
            <TextBrand>{brand}</TextBrand>
            <TextTitle>{title}</TextTitle>
          </TextRow>
          <TextPrice>${price}</TextPrice>
        </TextWrapper>
      </Wrapper>
    </CardLink>
  );
};

export default ProductCard;
