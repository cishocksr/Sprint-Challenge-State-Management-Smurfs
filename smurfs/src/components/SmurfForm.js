import React, { useState } from "react";

const SmurfForm = props => {
  const [smurfFormData, setSmurfFormData] = useState({
    name: "",
    age: 0,
    height: ""
  });

  const changeHandler = e => {
    setSmurfFormData({
      ...setSmurfFormData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    e.target.reset();
    props.submitForm(smurfFormData);
  };

  return (
    <form onSubmi={submitHandler}>
      <label>
        Name:
        <input type="text" id="name" name="name" onChange={changeHandler} />
      </label>
      <label>
        Age:
        <input type="number" id="age" name="age" onChange={changeHandler} />
      </label>
      <label>
        Height:
        <input type="text" id="height" name="height" onChange={changeHandler} />
      </label>
      <button>Add Smurf</button>
    </form>
  );
};

export default SmurfForm;
