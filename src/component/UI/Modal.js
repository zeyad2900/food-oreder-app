import classes from "./Modal.module.css";

const Overlay = (props) => {
    return <div className={classes.backdrop} onClick={props.close}></div>;
};

const Content = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    return (
        <>
            <Overlay close={props.close} />
            <Content>{props.children}</Content>
        </>
    );
};

export default Modal;
