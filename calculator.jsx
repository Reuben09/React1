import { useState } from "react";

function Calculator() {
  // TODO1 This keeps track of what the user has typed
 

  // 1. List of buttons we want to show
  const buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "=", "C"];

  // 2. What happens when we click a button
//   const handleClick = (value) => {
//     if (value === "C") {
//  // Clear
//     } else if (value === "=") {
//       // TODO2: make it calculate the result 
//     } else {
//       //TODO3 Add button to the expression
     
//     }
//   };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <div style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
        {/* TODO5 */}
        {/* {expression || "0"} */}
      </div>

      {/* TODO4 Dynamically create all the buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 60px)", gap: "5px" }}>
       
      </div>
    </div>
  );
}

export default Calculator;
