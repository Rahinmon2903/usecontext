import React, { useContext } from 'react';
import { myContext } from '../App';

const CompD = () => {
     const[name, setName]=useContext(myContext)
    
        const handleclick =()=>{
            setName("sukin")
        }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={handleclick}>change</button>
            
        </div>
    );
};

export default CompD;