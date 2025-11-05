import React, { useContext } from "react";
import { cartDetials } from "../Context/CartContext";


const Products = () => {
    const[cart,handleClick]=useContext(cartDetials);
   
  const products = [
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Iphone", price: 85000 },
    { id: 3, name: "Vaccum Cleaner", price: 10000 },
    { id: 4, name: "Washing Machine", price: 55000 },
    { id: 5, name: "Headphone", price: 5000 },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Products Page</h1>
      <div style={{ display: "flex", gap: "50px" }}>
        {products.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <button onClick={()=>handleClick(item)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;