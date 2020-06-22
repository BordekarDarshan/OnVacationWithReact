import { createSelector } from "reselect";

// 2 Types Of Selector
// input.
// output.

const selectCart = (state) => state.isCartVisible;

export const cartListToggle = createSelector(
  [selectCart],
  (toggle) => toggle.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((prev, next) => prev + next.quantity, 0)
);

export const selectTotalAmount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((prev, next) => prev + next.quantity * next.price, 0)
);

// selectCart took isCartVisible(1 layer deep) from redux state.
// Now, selectCart = {iscartvisible : {}}

// selectCartItems refencing selectCart means "iscartvisible".
// In that we have "cartItems" array.

// selectCartItemsCount refencing selectCartItems means "cartItems" array.
// So that's why when we invoke "selectCartItemsCount" function we have give
// parameter in that which is "Redux state" because it is referencing
// all the way to "selectCart".
