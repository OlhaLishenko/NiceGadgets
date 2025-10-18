import React, { useContext } from 'react';
import './BtnAdd.scss';
import { Btn_Title_Add } from '../../variables';
import { CartContext } from '../../context/CartContext';
import { NotificationContext } from '../../context/CartContext copy';

type BtnAddProps = {
  productId: string;
};

export const BtnAdd: React.FC<BtnAddProps> = ({ productId }) => {
  const { cartList, setCartList } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  const addToCart = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (cartList.includes(productId)) {
      const filteredCartList = [...cartList].filter(id => id !== productId);
      setCartList(filteredCartList);
    }

    setCartList([...cartList, productId]);
    setNotification(true);
    setTimeout(() => setNotification(false), 2000);
  };

  return (
    <button onClick={addToCart} className="btn-add">
      {Btn_Title_Add}
    </button>
  );
};
