import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProducts } from "../../assets/libs/api";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ProductResponse = await fetchProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  console.log("데이터:", products);

  return (
    <div>
      <Header />
      <Wrapper>
        <Search />
        <ListWrapper>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              brand={product.brand}
              price={product.price}
            />
          ))}
        </ListWrapper>
      </Wrapper>
    </div>
  );
};

export default Main;
