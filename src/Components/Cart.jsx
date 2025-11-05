import React, { useContext } from 'react';
import { cartDetials } from '../Context/CartContext';

const Cart = () => {
    const[cart]=useContext(cartDetials);
    
    return (
        <div>
             <h1 style={{ textAlign: "center" }}>Cart Page</h1>
      <div style={{ display: "flex", gap: "50px" }}>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <button onClick={()=>handleClick(item)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
            
        </div>
    );
};

export default Cart;