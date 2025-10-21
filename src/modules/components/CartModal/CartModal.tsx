import React, { useContext } from 'react';
import './CartModal.scss';
import { DispatchCartContext } from '../../shared/reduce/CartReducer';

type CartModalProps = {
  handleModal: (arg: boolean) => void;
};

export const CartModal: React.FC<CartModalProps> = React.memo(
  ({ handleModal }) => {
    console.log('is butn render');

    const cartDispatch = useContext(DispatchCartContext);

    const handleConfirm = () => {
      cartDispatch({ type: 'clearCart' });

      handleModal(false);
    };

    return (
      <div className="cart-modal">
        <div className="cart-modal__overlay">
          <div className="modal">
            <div className="modal__header">
              <span className="modal__title">Ooopps</span>
            </div>
            <div className="modal__body">
              Checkout is not implemented yet. <br /> Do you want to clear the
              Cart?
            </div>
            <div className="modal__footer">
              <button className="modal__btn" onClick={handleConfirm}>
                Ok
              </button>
              <button className="modal__btn" onClick={() => handleModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
