import { useState } from "react";
import Header from "./Components/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";
function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {  
    setShowCart(true);
  };
  const removeCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onclose={removeCartHandler}></Cart>}
      <Header onshowcart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
export default App;
