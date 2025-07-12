import React from "react";
import { useContext } from "react";
import Globalcontext from "../../global";

export default function Decrement() {

  const {count,setCount} = useContext(Globalcontext);

  return (
    <>
      
      <button className="counter-button " onClick={()=>setCount(count-1)} >
        Decrement
      </button>
           
    </>
  );
}
