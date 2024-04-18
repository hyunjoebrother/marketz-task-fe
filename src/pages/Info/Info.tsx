import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 1.2rem 0;
`;

const ListWrapper = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

const ImageWrapper = styled.div`
  @media screen and (max-width: 359px) {
    width: 14.8rem;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    width: 18rem;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    width: 21.6rem;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    min-width: 24rem;
    max-width: 36rem;
  }

  @media screen and (min-width: 1024px) {
    width: 40rem;
  }
`;

const ImageSrc = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`;

const TextBrand = styled.p`
  font-weight: 500;
  color: grey;
  white-space: nowrap;
  margin: 0;
  align-items: flex-end;

  @media screen and (max-width: 359px) {
    font-size: 0.88rem;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    font-size: 0.92rem;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const TextTitle = styled.p`
  font-weight: 700;
  color: #4f5153;
  margin: 0;

  @media screen and (max-width: 359px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    font-size: 1.28rem;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    font-size: 1.48rem;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

const TextPrice = styled.p`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 400;
  color: #4f5153;
  margin: 0;

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

const TextDescription = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: #4f5153;
  line-height: 130%;

  @media screen and (max-width: 359px) {
    font-size: 0.88rem;
    padding: 0 1rem;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    font-size: 1rem;
    padding: 0 1.2rem;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    font-size: 1.16rem;
    padding: 0 1.4rem;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    font-size: 1.36rem;
    padding: 0 3.6rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.48rem;
    padding: 0 8rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.6rem;
    padding: 0 10rem;
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;

  @media screen and (max-width: 359px) {
    height: 8rem;
    padding: 1.4rem 0 1rem 0;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    height: 8.8rem;
    padding: 1.6rem 0 1rem 0;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    height: 12rem;
    padding: 2.4rem 0 1.4rem 0;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    height: 20rem;
    padding: 4.8rem 0 4rem 0;
  }

  @media screen and (min-width: 1024px) {
    height: 24rem;
    padding: 6rem 0 4rem 0;
  }

  @media screen and (min-width: 1280px) {
    height: 32rem;
    padding: 6rem 0 4.8rem 0;
  }
`;

const ImageSlideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  cursor: pointer;
  gap: 1rem;
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
        <BtnWrapper>
          <Button path="/" text="목록으로 돌아가기" />
        </BtnWrapper>

        <ListWrapper>
          <ImageWrapper>
            <ImageSrc src={product.thumbnail} />
          </ImageWrapper>
          <TextWrapper>
            <TextBrand>{product.brand}</TextBrand>
            <TextTitle>{product.title}</TextTitle>
            <TextDescription>{product.description}</TextDescription>
            <TextPrice>${product.price}</TextPrice>
          </TextWrapper>
          <SlideWrapper>
            <ImageSlideWrapper>
              {product.images.map((image: string, index: number) => (
                // eslint-disable-next-line
                <img key={index} src={image} alt={`Image ${index + 1}`} />
              ))}
            </ImageSlideWrapper>
          </SlideWrapper>
        </ListWrapper>
      </Wrapper>
    </div>
  );
};

export default Info;
