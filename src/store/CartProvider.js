import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const addedItem = state.items.concat(action.item);
        const addedAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: addedItem,
            totalAmount: addedAmount,
        };
    }
};

const defaultItem = {
    items: [],
    totalAmount: 0,
};
const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultItem);

    const addItemHandler = (item) => {
        dispatchCartState({
            type: "ADD",
            item: item,
        });
    };

    const removeItemHandler = (id) => {
        dispatchCartState({
            type: "REMOVE",
            id: id,
        });
    };

    const CartItems = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return <CartContext.Provider value={CartItems}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
