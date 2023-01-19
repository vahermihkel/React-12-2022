import { createContext, useState } from "react";


const CartSumContext = createContext(null);

export const CartSumContextProvider = (props) => {
  const [cartSum, setCartSum] = useState(calculateCartSum());

  function calculateCartSum() {
    let cartLS = localStorage.getItem("cart");
    cartLS = JSON.parse(cartLS) || [];
    let cartsum = 0;
    cartLS.forEach(element => cartsum = cartsum + element.product.price * element.quantity );
    return cartsum.toFixed(2);
  }

  return (
    <CartSumContext.Provider value={{
      cartSum: cartSum,
      setCartSum: setCartSum
    }}>
      {props.children}
    </CartSumContext.Provider>
  )
}


export default CartSumContext;

