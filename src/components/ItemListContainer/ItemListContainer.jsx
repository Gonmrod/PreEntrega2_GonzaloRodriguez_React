import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import mockProducts from "../mocks/products";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = mockProducts.filter(
      (product) => product.categoryId === categoryId
    );
    setProducts(filteredProducts);
  }, [categoryId]);

  return <ItemList products={products} />;
};

export default ItemListContainer;
