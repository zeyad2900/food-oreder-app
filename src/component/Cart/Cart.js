import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const valid = cartCtx.items.length > 0;

    const removeHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const addHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const items = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((ele) => {
                return <CartItem key={ele.id} name={ele.name} price={ele.price} amount={ele.amount} onRemove={removeHandler.bind(null, ele.id)} onAdd={addHandler.bind(null, ele)} />;
            })}
        </ul>
    );
    return (
        <Modal close={props.close}>
            {items}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.close}>
                    Close
                </button>
                {valid && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};
export default Cart;
