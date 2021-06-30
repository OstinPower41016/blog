import * as React from "react";
import styled from "styled-components";

interface IInputProps {
  type?: string;
  placeholder: string;
  onInput?: any;
}

const Input: React.FunctionComponent<IInputProps> = (props) => {
  const { type = "text", placeholder, onInput } = props;
  return (
    <InputElement
      type={type}
      placeholder={placeholder}
      className="rounded py-2.5 px-6 w-full"
      onInput={onInput}
    />
  );
};

const InputElement = styled.input`
  font-size: 1.25rem;
  border: 1px solid #ccc;
  outline: none;
  &:focus {
    border-color: #66afe9;
  }
`;

export default Input;
