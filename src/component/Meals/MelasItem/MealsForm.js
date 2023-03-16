import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealsForm.module.css";

const MealForm = (props) => {
    const [valid, setValid] = useState(true);

    const inputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredAmountNum = +enteredAmount;
        if (enteredAmountNum === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNum);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={inputRef}
                name={"Amount"}
                about={{
                    id: "amount",
                    type: "number",
                    step: 1,
                    min: 0,
                    max: 5,
                    defaultValue: 1,
                }}
            />
            <button>+ Add</button>
            {!valid && <p>wrong input</p>}
        </form>
    );
};
export default MealForm;
