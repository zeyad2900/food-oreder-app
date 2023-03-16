import imag from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Fast food</h1>
                <HeaderCartButton show={props.show} />
            </header>
            <div className={classes["main-image"]}>
                <img src={imag} alt="food"></img>
            </div>
        </>
    );
};

export default Header;
