import React from "react";
import { Fab } from 'react-tiny-fab';
import { MDBIcon } from "mdbreact";
import "./ShoppingCartFAB.css"



function ShoppingCartFAB() {

    return(
        <div className="snipcart-checkout snipcart-summary">
            <Fab
            icon={<MDBIcon icon="shopping-cart" />}
            mainButtonStyles = {{backgroundColor: "#00695c"}}
            text={<span id="itemCount" className="snipcart-items-count"></span>}
            alwaysShowTitle={true}
            />  
        </div>
    );
}

export default ShoppingCartFAB;

