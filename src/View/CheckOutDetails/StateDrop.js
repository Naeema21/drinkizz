import React from "react";

const states = [
  ["Australia", "Australia"],
  ["Canada", "Canada"],
  ["France", "France"],
  ["Germany", "Germany"],
  ["Switzerland", "Switzerland"],
  ["USA", "USA"]
];

const StateDrop = ({ label, required, ...others }) => (
  <>
    <label>{label}</label>
    <select {...others} className="form-select" id="checkout-country" required={required}>
      {states.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </>
);

export default StateDrop;