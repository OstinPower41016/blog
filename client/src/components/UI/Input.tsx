import * as React from "react";
import styled from "styled-components";
import cn from "classnames";

interface IInputProps {
  type?: string;
  placeholder: string;
  onInput?: any;
  className?: string;
  onKeyDown?: any;
  value?: string;
}

const Input: React.FunctionComponent<IInputProps> = (props) => {
  const { type = "text", placeholder, onInput, onKeyDown, value } = props;
  return (
    <InputElement
      type={type}
      placeholder={placeholder}
      className={cn("rounded py-2.5 px-6 w-full", { [props.className!]: props.className })}
      onInput={onInput}
      onKeyDown={onKeyDown}
      value={value}
    />
  );
};

const InputElement = styled.input`
  border: 1px solid #ccc;
  outline: none;
  &:focus {
    border-color: #66afe9;
  }
`;

export default Input;
