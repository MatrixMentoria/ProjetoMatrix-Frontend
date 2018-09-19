import React from "react";

const Input = ({ link, ...props }) => (
  <input
    {...props}
    className="form-control"
    onChange={e => link.set(e.target.value)}
    value={link.value}
  />
);

export default Input;
