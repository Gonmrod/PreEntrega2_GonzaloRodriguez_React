import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import mockProducts from "../mocks/products";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = mockProducts.find(
      (product) => product.id === itemId
    );
    setProduct(selectedProduct);
  }, [itemId]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
