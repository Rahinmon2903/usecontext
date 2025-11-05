import React, { createContext, useContext, useState } from "react";

import CompA from "./Components/CompA";
import CompB from "./Components/CompB";



export const myContext=createContext();


const App = () => {

  const[value,setValue]=useState(0);





  return (
    <div>
      <myContext.Provider value={[value,setValue]}>


        <CompB/>
        <CompA/>
      </myContext.Provider>
    


    
    </div>
  );
};

export default App;