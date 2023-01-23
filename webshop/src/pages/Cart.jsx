import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import styles from "../css/Cart.module.css";
// import { Button } from "react-bootstrap";
import Button from '@mui/material/Button';
import ParcelMachines from "../components/cart/ParcelMachines";
import Payment from "../components/cart/Payment";
import CartSumContext from "../store/CartSumContext";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const cartSumCtx = useContext(CartSumContext);

  // localStorage-s saan toodete hinda muuta
  // lahendus: võtame kõik tooted fetch abil ja võtame hinnad hoopis sealt, võtted localStorage-st ID'd

  const empty = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    cartSumCtx.setCartSum(0);
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
        remove(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateCartsum());
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateCartsum());
  }

  const remove = (index) => {
    cart.splice(index,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateCartsum());
  }

  const calculateCartsum = () => {
    let cartsum = 0;
    cart.forEach(element => cartsum = cartsum + element.product.price * element.quantity );
    return cartsum.toFixed(2);
  }

  return (
    <div>
      { cart.length === 0 && <div>Ostukorv on tühi. <Link to="/">Lisa tooteid</Link></div>}
      { cart.length > 0 && 
        <div className={styles["cart-top"]}>
          <Button variant="outlined" onClick={empty}>Tühjenda</Button>
          <div>{cart.length} tk</div>
        </div> }
      {cart.map((element, index) => 
        <div key={element.product.id} className={styles.product}>
          <img className={styles.image} src={element.product.image} alt="" />
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} €</div>
          <div className={styles.quantity}>
            <img className={styles.button} src="/minus.png" onClick={() => decreaseQuantity(index)} alt="" />
            <div>{element.quantity} tk</div>
            <img className={styles.button} src="/add.png" onClick={() => increaseQuantity(index)} alt="" />
          </div>
          <div className={styles.sum}>{(element.product.price * element.quantity).toFixed(2)} €</div>
          <img className={styles.button} src="/delete.png" onClick={() => remove(index)} alt="" />
        </div> )}
      { cart.length > 0 && 
        <div className={styles.cart__bottom}>
          <div>Kokku: {calculateCartsum()} €</div>
          <ParcelMachines />
          <Payment sum={calculateCartsum()} />
        </div>}
    </div>
  )
}

// 150+ rida -- hakkame mõtlema väljatõstmise peale
// 200 rida -- tõstame välja

export default Cart
