import React, { Component } from 'react';

function Cart(){
    return(
        <React.Fragment>
            <div className="App">
                <div> CART </div>
                <div className="item">
                <div className="itemPicture">img placeholder</div>
                <div className="itemName">Fried Shrimp</div>
                <div className="itemRemove">Remove</div>
                </div>
                <div className="checkout"> CHECKOUT </div>
            </div>
        </React.Fragment>
  );
}

export default Cart;
