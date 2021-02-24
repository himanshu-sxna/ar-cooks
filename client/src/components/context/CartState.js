import React, { useState } from "react";
import CartContext from "./cartContext";

function CartState (props) {

    const [ displayCart, SetDisplayCart ] = useState(false);

    return (
        <CartContext.Provider value={{
            displayCart: displayCart,
            SetDisplayCart,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;