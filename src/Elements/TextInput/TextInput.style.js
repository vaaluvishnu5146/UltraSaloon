import styled from "styled-components";

const Input = styled.input`
  width: auto;
  height: 50px;
  outline: none;
  border: 1px solid grey;
  border-radius: 5px;
  padding-inline-start: 10px;
  font-size: 1rem;
  margin-bottom: ${(props) => props.marginBottom};
`;

export { Input };
