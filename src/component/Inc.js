import React, { useContext } from "react";

import { useState } from "react";
import Globalcontext from "../../global";

export default function Increment() {

 const {count,setCount} = useContext(Globalcontext)
  return (
    <>
      <h2 className="counter-value">Child Count: {count}</h2>
      <button className="counter-button " onClick={()=>setCount(count+1)} >
        Increment
      </button>

    </>
  );
}
