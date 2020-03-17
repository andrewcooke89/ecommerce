import CartACtionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartACtionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartACtionTypes.ADD_ITEM,
  payload: item
});