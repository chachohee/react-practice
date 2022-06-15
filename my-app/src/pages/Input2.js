import React, { useState } from "react";

const Input2 = () => {
  const [txtValue, setTextValue] = useState("");
  const change = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={change} />
      <br></br>
      <p>{txtValue}</p>
    </div>
  );
};

export default Input2;
