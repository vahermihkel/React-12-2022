// import "../css/Homepage.css";
import config from "../data/config.json";
import { useParams } from "react-router"
import { useState, useEffect } from "react";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => setProduct(json.find(product => product.id === Number(productId))));
  }, [productId]);

  return (
    <div>
      {product !== undefined ? (
        <>
          <div className="single-product-name">{product.name}</div>
          <div className="single-product-description">{product.description}</div>
          <div className="single-product-price">{product.price}</div>
          <img className="single-product-image" src={product.image} alt="" />
        </>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}

export default SingleProduct;