import React from "react";
import { Button } from "./Button.style";

function BasicCta({ text = "", onClick = () => {}, background = "" }) {
  return (
    <Button background={background} onClick={onClick}>
      {text}
    </Button>
  );
}

export default BasicCta;
