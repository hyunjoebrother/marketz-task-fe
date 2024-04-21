import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProducts } from "../../assets/libs/api";
import Button from "../../components/Button/Button";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 359px) {
    padding: 0 1.2rem;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    padding: 0 1.4rem;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    padding: 0 1.6rem;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    padding: 0 4.8rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 4rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 8rem;
  }
`;

const ListWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  padding: 0.8rem;

  @media screen and (min-width: 390px) and (max-width: 667px) {
    gap: 1.6rem;
  }

  @media screen and (min-width: 668px) {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
    padding: 2rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 2rem;
  }
`;

const BtnWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 0 1.2rem 0;
`;

const UpText = styled.p`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: #4f5153;
  cursor: pointer;

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

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductResponse {
  products: Product[];
}

const Main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let savedVisitedInfo = localStorage.getItem("isVisitInfoPage");
    let savedScrollPosition = localStorage.getItem("scrollPosition");
    if (savedVisitedInfo === "true") {
      window.scrollTo(0, parseInt(savedScrollPosition || "0"));
    }
  }, []);

  const fetchData = async () => {
    try {
      const data: ProductResponse = await fetchProducts();
      setProducts(data.products.slice(0, 10));
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  const searchProducts = async (searchItem: string) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchItem}`
      );
      const data: ProductResponse = await response.json();
      setSearchItem(searchItem);
      setSearchResults(data.products);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const loadMore = async () => {
    try {
      const data: ProductResponse = await fetchProducts();
      setProducts((prevProducts) => [
        ...prevProducts,
        ...data.products.slice(prevProducts.length, prevProducts.length + 10),
      ]);
    } catch (error) {
      console.error("Error loading:", error);
    }
  };

  const handleSaveScroll = () => {
    const scrollPosition = window.scrollY;
    localStorage.setItem("scrollPosition", scrollPosition.toString());
  };

  return (
    <div>
      <Header />
      <Wrapper>
        <Search onSearch={searchProducts} />
        <ListWrapper>
          {(searchItem === "" ? products : searchResults).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              brand={product.brand}
              price={product.price}
              onClick={handleSaveScroll}
            />
          ))}
          {searchItem && searchResults.length === 0 && (
            <div>해당 상품이 없습니다</div>
          )}
        </ListWrapper>

        <BtnWrapper style={{ display: searchItem === "" ? "" : "none" }}>
          {products.length === 100 ? (
            <UpText
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              👆
              <br />맨 위로 이동하기
            </UpText>
          ) : (
            <Button text="더보기" onClick={loadMore} />
          )}
        </BtnWrapper>
      </Wrapper>
    </div>
  );
};

export default Main;
