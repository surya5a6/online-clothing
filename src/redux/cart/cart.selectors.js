import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  //will get selector list as an array and the function will get return value of that selector, here it is cart
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  //will get selector list as an array and the function will get return value of that selector, here it is cart
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
    0
  )
);
