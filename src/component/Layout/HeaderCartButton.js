import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItem = cartCtx.items.reduce((current, ele) => {
        return current + ele.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.show}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    );
};
export default HeaderCartButton;
