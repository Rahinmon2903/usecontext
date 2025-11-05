import React, { useContext } from 'react';
import { myContext } from '../App';

const CompD = () => {
     const[name, setName]=useContext(myContext)
    
        const handleclick =()=>{
            setName((prev)=>({
                ...prev,
                age:30
            }))
        }
    return (
        <div>
            <h1>{name.age}</h1>
            <button onClick={handleclick}>change</button>
            
        </div>
    );
};

export default CompD;