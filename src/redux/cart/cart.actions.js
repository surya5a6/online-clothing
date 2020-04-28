import { cartActions } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActions.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActions.ADD_ITEM,
  payload: item,
});
