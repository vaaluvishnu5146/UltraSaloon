import React from "react";
import { Select } from "./Select.styled";

function BasicSelect({
  options = [],
  value = "",
  onSelect = (e) => {},
  id = "",
  name = "",
  marginBottom = null,
}) {
  return (
    <Select
      marginBottom={marginBottom}
      value={value}
      onChange={onSelect}
      id={id}
      name={name}
    >
      <option>Select Category</option>
      {options?.map((o, i) => (
        <option key={`${id}-option-${i}`}>{o}</option>
      ))}
    </Select>
  );
}

export default BasicSelect;
