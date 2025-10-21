import React, { useContext } from 'react';
import './CartItem.scss';
import { CircleButton } from '../CircleButton';
import { icons } from '../../../../global-assets/static';
import type { Product } from '../../types/Product';
import {
  DispatchCartContext,
  StateCartContext,
} from '../../reduce/CartReducer';

type CartItemProps = {
  product: Product;
};

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const cartState = useContext(StateCartContext);
  const cartDispatch = useContext(DispatchCartContext);
  const IconCancel = icons.close.valuePath;

  const { cartList } = cartState;

  const deleteProduct = () => {
    const filteringCartList = cartList.filter(
      cartItem => cartItem !== product.itemId,
    );
    cartDispatch({ type: 'setCartList', payload: filteringCartList });
  };

  const productAmount = cartList.filter(item => item === product.itemId).length;

  const decreaseProductAmount = () => {
    cartDispatch({ type: 'decrease', payload: product.itemId });
  };

  const increaseProductAmount = () => {
    cartDispatch({ type: 'increase', payload: product.itemId });
  };

  return (
    <div className="cart-item">
      <div className="cart-item__content">
        <div className="cart-item__product-info">
          <button className="cart-item__product-info__btn-close">
            <IconCancel
              className="cart-item__product-info__icon"
              onClick={deleteProduct}
            />
          </button>
          <div className="cart-item__product-info__image">
            <img src={product.image} alt={`${product.name} image`} />
          </div>
          <span className="cart-item__product-info__name">{product.name}</span>
        </div>
        <div className="cart-item__price-info">
          <div className="cart-item__price-info__controls">
            <div className="cart-item__btn-adjust-amount">
              <button onClick={decreaseProductAmount}>
                <CircleButton icon={icons.minus.valuePath} />
              </button>
              <div className="cart-item__btn-adjust-amount__amount">
                {productAmount}
              </div>
              <button onClick={increaseProductAmount}>
                <CircleButton icon={icons.plus.valuePath} />
              </button>
            </div>
          </div>
          <div className="cart-item__price-info__price">{`$${product.price}`}</div>
        </div>
      </div>
    </div>
  );
};
