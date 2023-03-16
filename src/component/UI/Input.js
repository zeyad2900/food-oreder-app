import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.about.id}>{props.name}</label>
            <input ref={ref} {...props.about} />
        </div>
    );
});
export default Input;
