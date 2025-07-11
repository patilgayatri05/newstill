import React, { useState } from "react";
import Increment from "./Inc";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Parent Count is: {count}</h1>
      <Increment counts={count} setCounts={setCount} />
    </>
  );
}

export default App;
