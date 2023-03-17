import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const addedAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: addedAmount,
        };
    }
    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return { items: updatedItems, totalAmount: updatedTotalAmount };
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
