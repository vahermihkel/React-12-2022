import { useState } from "react"
import { Link } from "react-router-dom";
import "../css/Cart.css";
// import { Button } from "react-bootstrap";
import Button from '@mui/material/Button';
import ParcelMachines from "../components/cart/ParcelMachines";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

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


  const pay = () => {
    const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentData = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": calculateCartsum(),
      "order_reference": Math.random() * 99999,
      "nonce": "a9b7f7e7as" + new Date() + Math.random() * 99999,
      "timestamp": new Date(),
      "customer_url": "https://webshopm122022.web.app"
      };
    const paymentHeaders = {
      "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json"
    };

    fetch(paymentUrl, {"method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link);
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
          <ParcelMachines />
          <button onClick={pay}>Maksa</button>
        </div>}
    </div>
  )
}

// 150+ rida -- hakkame mõtlema väljatõstmise peale
// 200 rida -- tõstame välja

export default Cart
