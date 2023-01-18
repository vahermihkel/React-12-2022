import { useEffect, useRef, useState } from "react";
import config from "../../data/config.json";
import { ToastContainer, toast } from 'react-toastify'; 
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../../css/MaintainProducts.css";

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const searchedRef = useRef();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setDbProducts(json);
        setLoading(false);
      });
  }, []);

  const deleteProduct = (index) => {
    products.splice(index, 1);
    setProducts(products.slice());
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)})
      .then(() => {
        toast.error("Toode kustutatud!", {"position": "bottom-right", "theme": "dark"});
      })  
  }

  const searchFromProducts = () => {
    const result = dbProducts.filter(element => 
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  }

  if (isLoading === true) {
    return (<Spinner />)
  }

  return (
    <div>
      <ToastContainer />
      <input ref={searchedRef} onChange={searchFromProducts} placeholder="Otsi siit" type="text" />
      <div>{products.length} tk</div>
      {products.map((element, index) => 
        <div key={element.id} className={element.active === true ? "active" : "inactive"}>
          <img src={element.image} alt="" />
          <div>{element.id}</div> 
          <div>{element.name}</div>
          <div>{element.price}</div>
          <div>{element.image}</div>
          <div>{element.category}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button onClick={() => deleteProduct(index)}>Kustuta</button>
          <Link to={"/admin/edit-product/" + element.id}>
            <button>Muuda</button>
          </Link>
        </div> )}
    </div>
  )
}

export default MaintainProducts