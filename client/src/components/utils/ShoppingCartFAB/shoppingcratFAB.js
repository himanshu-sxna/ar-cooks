import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../context/cartContext";
import { Fab } from 'react-tiny-fab';
import { MDBIcon } from "mdbreact";
import "./ShoppingCartFAB.css";

function ShoppingCartFAB() {

    const { displayCart, SetDisplayCart } = useContext(CartContext);
    const [ cartItems, setCartItems ] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            const itemsCount = window.Snipcart.store.getState().cart.items.count;
            setCartItems(itemsCount);
            if (itemsCount > 0) {   
                SetDisplayCart(state => !state);
            } else if (itemsCount === 0) {
                SetDisplayCart(false);
            }
        }, 1000);
        return ()=> clearTimeout(timer);
    });

    useEffect(()=> {
       
    }, [displayCart]);

    return(
        <div className="snipcart-checkout snipcart-summary">
            <Fab
            icon={<MDBIcon icon="shopping-cart" />}
            mainButtonStyles = {{backgroundColor: "#00695c"}}
            text={<span id="itemCount">{cartItems}</span>}
            alwaysShowTitle={true}
            />  
        </div>
    );
}

export default ShoppingCartFAB;

