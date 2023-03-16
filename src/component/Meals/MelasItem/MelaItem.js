import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealForm from "./MealsForm";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    const amountCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        amountCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.des}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};
export default MealItem;
