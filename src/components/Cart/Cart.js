import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Item : {props.cart.length}</p>
        </div>
       
    );
};

export default Cart;