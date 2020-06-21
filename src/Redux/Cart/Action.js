export const cartAction = () => ({
  type: "Change_Cart_Visibility",
});

export const addItemCartAction = (item) => ({
  type: "Add_Items_Cart",
  payload: item,
});

// Payload is actually optional property.
