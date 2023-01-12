import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import "../css/Cart.css";
// import { Button } from "react-bootstrap";
import Button from '@mui/material/Button';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);
  const [dbParcelMachines, setDbParcelMachines] = useState([]);

  useEffect(() => { // useEffect KUI tulen lehele ja kohe toimub API päring
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => {
        setParcelMachines(json);
        setDbParcelMachines(json);
      })
  }, []);

  const empty = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
        remove(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const remove = (index) => {
    cart.splice(index,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  const calculateCartsum = () => {
    let cartsum = 0;
    cart.forEach(element => cartsum = cartsum + element.product.price * element.quantity );
    return cartsum.toFixed(2);
  }

  const searchedRef = useRef();

  const searchFromParcelMachines = () => {
    const result = dbParcelMachines.filter(element => 
      element.NAME.toLowerCase().includes(searchedRef.current.value.toLowerCase())
      );
    setParcelMachines(result);
  }

  return (
    <div>
      { cart.length === 0 && <div>Ostukorv on tühi. <Link to="/">Lisa tooteid</Link></div>}
      { cart.length > 0 && 
        <div className="cart-top">
          <Button variant="outlined" onClick={empty}>Tühjenda</Button>
          <div>{cart.length} tk</div>
        </div> }
      {cart.map((element, index) => 
        <div key={element.product.id} className="product">
          <img className="image" src={element.product.image} alt="" />
          <div className="name">{element.product.name}</div>
          <div className="price">{element.product.price} €</div>
          <div className="quantity">
            <img className="button" src="/minus.png" onClick={() => decreaseQuantity(index)} alt="" />
            <div>{element.quantity} tk</div>
            <img className="button" src="/add.png" onClick={() => increaseQuantity(index)} alt="" />
          </div>
          <div className="sum">{(element.product.price * element.quantity).toFixed(2)} €</div>
          <img className="button" src="/delete.png" onClick={() => remove(index)} alt="" />
        </div> )}
      { cart.length > 0 && 
        <div className="cart-bottom">
          <div>Kokku: {calculateCartsum()} €</div>
          <input ref={searchedRef} onChange={searchFromParcelMachines} placeholder="Otsi siit" type="text" />
          <br />
          <select>
            {parcelMachines
            .filter(element => element.NAME !== "1. eelistus minu.omniva.ee-s")
            .filter(element => element.A0_NAME === "EE")
            .map(element => <option key={element.NAME}>{element.NAME}</option> )}
            {parcelMachines.length === 0 && <option disabled selected>Täpsusta otsingut</option> }
          </select>
        </div>}
    </div>
  )
}

// [
    // {
    //   "id": 44272736,
    //   "image": "https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png",
    //   "name": "Shop on eBay",
    //   "price": 20,
    //   "description": "Shop on eBay",
    //   "category": "jeans",
    //   "active": true
    // },
    // {
    //   "id": 44272736,
    //   "image": "https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png",
    //   "name": "Shop on eBay",
    //   "price": 20,
    //   "description": "Shop on eBay",
    //   "category": "jeans",
    //   "active": true
    // },
    // {
    //   "id": 62720814,
    //   "image": "https://i.ebayimg.com/thumbs/images/g/mTkAAOSw9IZf46Kp/s-l225.webp",
    //   "name": "Pantalone Uomo Invernale",
    //   "price": 31.66,
    //   "description": "Pantalone Uomo Invernale Felpato Termico Jeans Comodo Imbottito In Pile VEQUE",
    //   "category": "jeans",
    //   "active": true
    // },
// ]


// [
    //{product: {
    //   "id": 44272736,
    //   "image": "https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png",
    //   "name": "Shop on eBay",
    //   "price": 20,
    //   "description": "Shop on eBay",
    //   "category": "jeans",
    //   "active": true
    // },
    // quantity: 3
    //},
    //{product:  {
    //   "id": 62720814,
    //   "image": "https://i.ebayimg.com/thumbs/images/g/mTkAAOSw9IZf46Kp/s-l225.webp",
    //   "name": "Pantalone Uomo Invernale",
    //   "price": 31.66,
    //   "description": "Pantalone Uomo Invernale Felpato Termico Jeans Comodo Imbottito In Pile VEQUE",
    //   "category": "jeans",
    //   "active": true
    // },
    // quantity: 3
    //},
// ]

export default Cart