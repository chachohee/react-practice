import React, { useState } from "react";

const Input = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const change = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const { name, email, tel } = inputs;

  return (
    <div>
      <div>
        <label>name: </label>
        <input type="text" id="name" value={name} onChange={change} />
      </div>
      <div>
        <label>email: </label>
        <input type="email" id="email" value={email} onChange={change} />
      </div>
      <div>
        <label>tel: </label>
        <input type="tel" id="tel" value={tel} onChange={change} />
      </div>
      <br></br>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
      <p>전화번호: {tel}</p>
    </div>
  );
};

export default Input;
