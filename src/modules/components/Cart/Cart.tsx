import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss';
import { SectionTitle } from '../../shared/components/SectionTitle/SectionTitle';
import { BackButton } from '../../shared/components/BackButton';
import { CartItem } from '../../shared/components/CartItem';
import { getCartList } from '../../shared/servises/getCartList';
import { ProductListContext } from '../../shared/context/ProductListContext';
import type { Product } from '../../shared/types/Product';
import { calculateTotalSum } from '../../shared/servises/calculateSum';
import cartIsEmpty from '../../../global-assets/images/cart-is-empty.png';
import cartIsFilled from '../../../global-assets/images/cart-is-filled.png';
import { CartModal } from '../CartModal';
import {
  DispatchCartContext,
  StateCartContext,
} from '../../shared/reduce/CartReducer';

type CartProps = {};

export const Cart: React.FC<CartProps> = ({}) => {
  const { productList } = useContext(ProductListContext);
  const [modal, setModal] = useState(false);

  const cartState = useContext(StateCartContext);
  const cartDispatch = useContext(DispatchCartContext);
  const { cartList, cartFilled } = cartState;

  const cartProducts: Product[] = getCartList(cartList, productList);
  const cartUniqueList = new Set([...cartProducts]);
  const uniqueCartList = Array.from(cartUniqueList);
  const sum = calculateTotalSum(cartProducts);

  useEffect(() => {
    if (uniqueCartList.length > 0) {
      cartDispatch({ type: 'cartFilled', payload: true });
      setTimeout(() => {
        cartDispatch({ type: 'cartFilled', payload: false });
      }, 2000);
    }
  }, []);

  const handleModal = () => {
    setModal(true);
  };

  return (
    <>
      {modal && <CartModal handleModal={setModal} />}
      <div className="cart">
        {uniqueCartList.length === 0 ? (
          <div className="cart__empty">
            <span className="cart__empty__title">Cart is empty</span>
            <img
              className="cart__empty__image"
              src={cartIsEmpty}
              alt="Cart is empty"
            />
          </div>
        ) : (
          <div className="cart-content">
            {cartFilled ? (
              <div className="cart__filled">
                <span className="cart__filled__title">{`${cartList.length} items in your cart`}</span>
                <img
                  className="cart__filled__image"
                  src={cartIsFilled}
                  alt="Cart is filled"
                />
              </div>
            ) : (
              <>
                <div className="cart-content__header header">
                  <BackButton />
                  <SectionTitle text={'Cart'} />
                </div>
                <div className="cart-content__main">
                  <div className="cart-content card-content__product-list">
                    {uniqueCartList.map(product => (
                      <CartItem product={product} key={product.itemId} />
                    ))}
                  </div>
                  <div className="cart-content__total-price">
                    <div className="cart-content__total-price__sum">{`$${sum}`}</div>
                    <div className="cart-content__total-price__product-amount">{`Total for ${cartList.length} items`}</div>
                    <button
                      onClick={handleModal}
                      className="cart-content__total-price__btn-confirm"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
