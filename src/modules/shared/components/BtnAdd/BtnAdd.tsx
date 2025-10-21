import React, { useContext } from 'react';
import './BtnAdd.scss';
import { Btn_Title_Add } from '../../variables';
import { DispatchContext } from '../../reduce/NotificationReduce';
import {
  DispatchCartContext,
  StateCartContext,
} from '../../reduce/CartReducer';

type BtnAddProps = {
  productId: string;
};

export const BtnAdd: React.FC<BtnAddProps> = ({ productId }) => {
  const dispatch = useContext(DispatchContext);
  const cartState = useContext(StateCartContext);
  const cartDispatch = useContext(DispatchCartContext);

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      if (cartState.cartList.includes(productId)) {
        // const filteredCartList = [...cartState.cartList].filter(
        //   i => i !== productId,
        // );

        cartDispatch({
          type: 'setCartList',
          payload: [...cartState.cartList, productId],
        });

        dispatch({
          type: 'addExistedProduct',
          payload: 'Product has already added to cart',
        });
      } else {
        dispatch({
          type: 'addProduct',
          payload: `${cartState.cartList.length + 1} items in your cart`,
        });

        cartDispatch({
          type: 'setCartList',
          payload: [...cartState.cartList, productId],
        });
      }
    } finally {
      setTimeout(() => dispatch({ type: 'cancel' }), 2000);
    }
  };

  return (
    <button onClick={addToCart} className="btn-add">
      {Btn_Title_Add}
    </button>
  );
};
