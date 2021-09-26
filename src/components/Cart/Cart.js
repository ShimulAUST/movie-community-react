import React from 'react';


const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let movieNames = [];
    for (const movie of cart) {
        total = total + movie.budget;
        movieNames.indexOf(movie.name) === -1 ? movieNames.push(movie.name) : console.log("This item already exists");

    }


    return (
        <div>
            <h1>Cart</h1>
            <h3>Items Order:{props.cart.length}</h3>
            <h4>Total: $ {total}</h4>
            <h6>{movieNames}</h6>
        </div>
    );
};

export default Cart;