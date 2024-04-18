import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 359px) {
    width: 15rem;
    padding: 1.4rem 0 2rem 0;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    min-width: 18rem;
    max-width: 20rem;
    padding: 1.6rem 0 2.4rem 0;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    min-width: 20rem;
    max-width: 28rem;
    padding: 1.8rem 0 3.2rem 0;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    min-width: 28rem;
    max-width: 32rem;
    padding: 2.4rem 0 3.2rem 0;
  }

  @media screen and (min-width: 1024px) {
    min-width: 32rem;
    max-width: 40rem;
    padding: 3rem 0 4.4rem 0;
  }
`;

const Input = styled.input`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 3rem);
  border: 0.12rem solid #4f5153;
  border-radius: 3rem;
  padding: 0 2rem;
  color: #4f5153;

  &:focus {
    border: 0.16rem solid #4f5153;
  }

  @media screen and (max-width: 359px) {
    height: 5.6vh;
    border: 0.1rem solid #4f5153;
    padding: 0 1.4rem;
    font-size: 0.88rem;

    &::placeholder {
      color: gray;
      font-size: 0.76rem;
    }
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    height: 6vh;
    font-size: 1rem;

    &::placeholder {
      color: gray;
      font-size: 0.88rem;
    }
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    height: 6vh;
    font-size: 1rem;

    &::placeholder {
      color: gray;
      font-size: 0.92rem;
    }
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    height: 5.6vh;
    font-size: 1.2rem;

    &::placeholder {
      color: gray;
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 5.8vh;
    font-size: 1.2rem;

    &::placeholder {
      color: gray;
      font-size: 1rem;
    }
  }
`;

const Text = styled.span`
  font-weight: 700;
  color: #4f5153;
  position: absolute;
  cursor: pointer;

  &:hover {
    color: #3474ae;
    font-weight: 900;
  }

  @media screen and (max-width: 359px) {
    font-size: 0.88rem;
    right: 1.2rem;
  }

  @media screen and (min-width: 360px) and (max-width: 389px) {
    font-size: 1rem;
    right: 1.4rem;
  }

  @media screen and (min-width: 390px) and (max-width: 667px) {
    font-size: 1rem;
    right: 1.6rem;
  }

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    font-size: 1.2rem;
    right: 2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
    right: 2.2rem;
  }
`;

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();
  const params = useParams<{ q?: string }>();

  useEffect(() => {
    const { q } = params;
    if (q) {
      setSearchItem(q);
    }
  }, [params]);

  const handleSearch = () => {
    onSearch(searchItem);
    if (searchItem.trim() === "") {
      navigate("/");
    } else {
      navigate(`?q=${searchItem}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Wrapper>
      <Input
        placeholder="검색어를 입력하세요"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Text onClick={handleSearch}>검색</Text>
    </Wrapper>
  );
};

export default Search;
