import React, { useContext } from 'react';
import { myContext } from '../App';

const CompB = () => {
      const[value,setValue]=useContext(myContext);
   
       const Sub=()=>{
           setValue(value=>value-1)
       }
       return (
           <div>
               <h1>{value}</h1>
               <button onClick={Sub}>SUB</button>
               
           </div>
       );
   };


export default CompB;