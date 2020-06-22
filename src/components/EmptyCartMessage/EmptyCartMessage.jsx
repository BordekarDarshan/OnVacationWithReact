import React from "react";

function EmptyCartMessage({ wrapperClass, msgClass }) {
  return (
    <div className={wrapperClass}>
      <img src="https://i.ibb.co/VTkbtvs/Empty-Bag.png" alt="Empty-Bag"></img>

      <p className={msgClass}>
        There is nothing in your bag. Let's add some items
      </p>
    </div>
  );
}

export default EmptyCartMessage;
