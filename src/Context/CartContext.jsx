import React, {  createContext, useState } from 'react';

export const cartDetials=createContext();

const CartContext = ( {children}) => {

    const[cart,setCart]=useState([]);

    const handleClick =(item)=>{
        setCart((prev)=>([
            ...prev,
            item

        ]))
    }
    
    return (
        <div>
            <cartDetials.Provider value={[cart,handleClick]}>

                {children}
            </cartDetials.Provider>
            
        </div>
    );
};

export default CartContext;