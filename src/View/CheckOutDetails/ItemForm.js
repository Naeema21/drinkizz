import React from "react";

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
  <div>
    {type === "text" ? (
      <>
        <input className="form-control" type={type} {...otherProps} />
      </>
    ) : (
      <>
        <input className="form-control" type={type} {...otherProps} />
        {label}
      </>
    )}
  </div>
);

export default ItemForm;