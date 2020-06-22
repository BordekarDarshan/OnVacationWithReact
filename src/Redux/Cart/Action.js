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

export const QuantityIncreaseAction = (item) => ({
  type: "Quantity_Increase_Action",
  payload: item,
});

export const removeItemCartAction = (item) => ({
  type: "Remove_Cart_Item",
  payload: item,
});

// Payload is actually optional property.
