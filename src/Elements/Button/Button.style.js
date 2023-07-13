import styled from "styled-components";

const Button = styled.button`
  width: auto;
  height: 50px;
  background: ${(props) => props.background || "green"};
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
`;

export { Button };
