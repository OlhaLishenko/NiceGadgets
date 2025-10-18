import { useReducer } from 'react';

interface notifType {
  state: boolean;
  title: string;
}

export const initNotifState: notifType = {
  state: false,
  title: '',
};

type notifActions = { type: 'addProduct' } | { type: 'addExistedProduct' };

export const nitifReducer = (
  notifState: notifType,
  notifAction: notifActions,
) => {
  switch (notifAction.type) {
    case 'addProduct':
      return {
        state: true,
        title: 'Product added to card',
      };
    case 'addExistedProduct':
      return {
        state: true,
        title: 'Product has already in a cart',
      };
    default:
      return notifState;
  }
};

export const [notifState, notifDispatch] = useReducer(
  nitifReducer,
  initNotifState,
);
