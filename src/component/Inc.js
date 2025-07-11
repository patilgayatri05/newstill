import React from "react";

export default function Increment({ counts, setCounts }) {
  return (
    <>
      <h2 className="counter-value">Child Count: {counts*5}</h2>
      <button className="counter-button " onClick={()=>setCounts(counts+5)} >
        Increment
      </button>
    </>
  );
}
