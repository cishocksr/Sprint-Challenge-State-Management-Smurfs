import React, { useState } from "react";

const SmurfForm = props => {
  const [smurfFormData, setSmurfFormData] = useState({
    name: "",
    age: 0,
    height: ""
  });

  const handleChange = e => {
    setSmurfFormData({
      ...smurfFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.smurfSubmit(smurfFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      console.log(onSubmit);
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={smurfFormData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={smurfFormData.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Height:
        <input
          type="text"
          id="inputHeight"
          name="height"
          value={smurfFormData.height}
          onChange={handleChange}
        />
      </label>
      <button>Add Smurf</button>
    </form>
  );
};

export default SmurfForm;
