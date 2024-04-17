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
