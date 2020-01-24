import React, { useState } from "react";
import { connect } from "react-redux";

//import action from actions//

const NewSmurf = props => {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  //handle change
  const handleChanges = e => {
      setSmurf({...smurf, [e.target.name]: e.target.value})
  }
    
  //Log the new values for each smurg
  const smurfValues = e => {
      e.preventDefault();
      props.
  }
};

return (
  <form onSubmit={}>
    <label>Name</label>
    <input
      maxLength="15"
      type="text"
      name="name"
      id="smurfname"
      onChange={handleChanges}
      value={smurf.name}
      placeholder="Enter Name"
    />

    <label>Age</label>
    <input
      maxLength="3"
      type="number"
      name="age"
      id="smurfage"
      onChange={handleChanges}
      value={smurf.age}
      placeholder="Enter Age"
    />

    <label>Name</label>
    <input
      maxLength="3"
      type="text"
      name="height"
      id="smurfheight"
      onChange={handleChanges}
      value={smurf.height}
      placeholder="Enter Height in cm"
    />
  </form>
);

export default connect(null, {})(AddSmurf);
