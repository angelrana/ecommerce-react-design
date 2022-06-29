import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );
    setProduct(response);
  };

  return (
    <Container>
      {product.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
