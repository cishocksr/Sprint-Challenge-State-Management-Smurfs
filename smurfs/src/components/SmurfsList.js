import React from "react";
import Smurfs from "./Smurfs";

const SmurfsList = props => {
  console.log(props);

  return props.data.map(smurf => {
    return (
      <div>
        <Smurfs
          key={smurf.id}
          name={smurf.name}
          height={smurf.height}
          age={smurf.age}
        />
      </div>
    );
  });
};

export default SmurfsList;
