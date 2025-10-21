import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import type { Product } from '../types/Product';
import { useLocaleStorage } from '../hooks/useLocaleStorage';

type State = {
  cartList: string[];
  cartFilled: boolean;
};
type Action =
  | { type: 'setCartList'; payload: string[] }
  | { type: 'increase'; payload: string }
  | { type: 'decrease'; payload: string }
  | { type: 'clearCart' }
  | { type: 'cartFilled'; payload: boolean };

const initState: State = {
  cartList: [],
  cartFilled: false,
};

const reducer = (state: State, action: Action) => {
  if (action.type === 'setCartList') {
    return {
      ...state,
      cartList: action.payload,
    };
  }

  if (action.type === 'increase') {
    return {
      ...state,
      cartList: [...state.cartList, action.payload],
    };
  }

  if (action.type === 'decrease') {
    const sameProductList = state.cartList.filter(
      item => item === action.payload,
    );

    if (sameProductList.length === 1) {
      const filteringCartList = state.cartList.filter(
        cartItem => cartItem !== action.payload,
      );

      return {
        ...state,
        cartList: filteringCartList,
      };
    }

    const index = state.cartList.indexOf(action.payload);
    const updatedList = [...state.cartList];
    updatedList.splice(index, 1);

    return {
      ...state,
      cartList: updatedList,
    };
  }

  if (action.type === 'clearCart') {
    return {
      cartList: [],
      cartFilled: false,
    };
  }

  if (action.type === 'cartFilled') {
    return {
      ...state,
      cartFilled: action.payload,
    };
  }

  return state;
};

export const StateCartContext = createContext(initState);
export const DispatchCartContext = createContext((action: Action) => {});

export const GlobalCartListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItemList, setCartItemList] = useLocaleStorage<string[]>(
    'cart',
    [],
  );
  const [cartState, cartDispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    {
      cartList: cartItemList,
      cartFilled: initState.cartFilled,
    },
  );

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setCartItemList(cartState.cartList);
  }, [cartState.cartList, setCartItemList]);

  return (
    <DispatchCartContext.Provider value={cartDispatch}>
      <StateCartContext.Provider value={cartState}>
        {children}
      </StateCartContext.Provider>
    </DispatchCartContext.Provider>
  );
};
