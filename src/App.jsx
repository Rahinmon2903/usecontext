import React, { createContext, useContext, useState } from "react";

import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
import CompC from "./Components/CompC";
import CompD from "./Components/CompD";

export const myContext = createContext();

const App = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState({
    name: "Rahin",
    age: 22,
  });

  return (
    <div>
      <myContext.Provider value={[value, setValue]}>
        <CompB />
        <CompA />
      </myContext.Provider>
      <myContext.Provider value={[name, setName]}>
        <CompC />
        <CompD />
      </myContext.Provider>
    </div>
  );
};

export default App;
