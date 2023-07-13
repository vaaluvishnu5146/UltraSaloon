import React from "react";
import { Input } from "./TextInput.style";

function TextInput({
  placeholder = "",
  value = "",
  onChange = () => {},
  id = "",
  name = "",
  marginBottom = null,
  disabled = false,
}) {
  return (
    <Input
      marginBottom={marginBottom}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      disabled={disabled}
    />
  );
}

export default TextInput;
