import React, { useContext } from 'react';
import { myContext } from '../App';

const CompA = () => {
    const[value,setValue]=useContext(myContext);

    const add=()=>{
        setValue(value=>value+1)
    }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={add}>ADD</button>
            
        </div>
    );
};

export default CompA;