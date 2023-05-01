import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";

const useProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData
    .find((p) => p.id === id);
    setProduct(foundProduct);
    }, [id]);
    
    return product;
    };
    
    export default useProduct;
