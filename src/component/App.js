import React, { useState } from "react";
import Increment from "./Inc";
import Decrement from "./Decrement";
import Globalcontext from "../../global";
import { useContext } from "react";


function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
    <Globalcontext.Provider value={{count,setCount}}>
      <h1>Parent Count is: {count}</h1>
      <Increment/>
      <Decrement/>
    </Globalcontext.Provider>  
    </>
  );
}

export default App;
