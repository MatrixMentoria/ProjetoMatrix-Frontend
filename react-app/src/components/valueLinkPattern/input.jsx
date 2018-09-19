import React from "react";

const Input = ({ link, ...props }) => (
  <input
    {...props}
    onChange={e => link.set(e.target.value)}
    value={link.value}
  />
);

export default Input;
