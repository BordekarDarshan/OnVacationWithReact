export const cartAction = () => ({
  type: "Change_Cart_Visibility",
});

export const addItemCartAction = (item) => ({
  type: "Add_Items_Cart",
  payload: item,
});

export const QuantityDecreaseAction = (item) => ({
  type: "Quantity_Decrease_Action",
  payload: item,
});

export const removeItemCartAction = (item) => ({
  type: "Remove_Cart_Item",
  payload: item,
});

export const resetCart = () => ({
  type: "Reset_Cart",
});

// Payload is actually optional property.
