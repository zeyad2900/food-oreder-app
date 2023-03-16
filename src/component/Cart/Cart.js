import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const items = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 19.22 }].map((ele) => {
                return <li>{ele.name}</li>;
            })}
        </ul>
    );
    return (
        <Modal close={props.close}>
            {items}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>12.44$</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.close}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};
export default Cart;
