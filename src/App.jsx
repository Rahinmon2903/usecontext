import React, { createContext, useState } from "react";

import CompC from "./Components/CompC";
import CompD from "./Components/CompD";

export const myContext = createContext();

const App = () => {

  const [name, setName] = useState("snow");

  return (
    <div>
    


      <myContext.Provider value={[name, setName]}>
        <CompC />
        <CompD />
      </myContext.Provider>
    </div>
  );
};

export default App;