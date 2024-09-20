import styles from "./CartModal.module.css";
import ReactDOM from "react-dom";

function Modal({ children, backdropClick }) {
  const backdropHandler = () => {
    backdropClick(false);
  };

  const cartClickHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.backdrop} onClick={backdropHandler}>
      <div className={styles.cartContainer} onClick={cartClickHandler}>
        {children}
      </div>
    </div>
  );
}

export default function CartModal({ children, onBackdropClick }) {
  const portalElement = document.getElementById("portal");

  return (
    <>
      {ReactDOM.createPortal(
        <Modal backdropClick={onBackdropClick}>{children}</Modal>,
        portalElement
      )}
    </>
  );
}
