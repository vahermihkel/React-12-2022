import { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from 'react-toastify'; 
import { Link } from "react-router-dom";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  const deleteProduct = (index) => {
    products.splice(index, 1);
    setProducts(products.slice());
    toast.error("Toode kustutatud!", {"position": "bottom-right", "theme": "dark"});
  }

  const searchFromProducts = () => {
    const result = productsFromFile.filter(element => 
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  }

  return (
    <div>
      <ToastContainer />
      <input ref={searchedRef} onChange={searchFromProducts} placeholder="Otsi siit" type="text" />
      <div>{products.length} tk</div>
      {products.map((element, index) => 
        <div key={element.id}>
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