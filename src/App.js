import { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartShown, setCartShown] = useState(false);

    const openCartHandler = () => {
        setCartShown(true);
    };
    const closeCartHandler = () => {
        setCartShown(false);
    };

    return (
        <CartProvider>
            {cartShown && <Cart close={closeCartHandler} />}
            <Header show={openCartHandler} />
            <Meals />
        </CartProvider>
    );
}

export default App;
