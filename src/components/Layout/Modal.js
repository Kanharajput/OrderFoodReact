import { Fragment } from 'react';
import style from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = () =>{
    return (
        <div className={style.backdrop}></div>
    );
}

// rignt now content class in not exists in css file
const ModalOverlay = (props) =>{
    return (
        <div className={style.modal}>
            <div className={style.content}>{props.children}</div>
        </div>
    );
}

// both using the same element
const portalElement = document.getElementById('overlays');

function Modal(props){
    return (
        <Fragment>
            { ReactDOM.createPortal(<Backdrop />, portalElement )}
            { ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement )}
        </Fragment>
    );
}

export default Modal;