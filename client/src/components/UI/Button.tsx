import * as React from "react";
import styled from "styled-components";
import cn from "classnames";

interface IButtonProps {
  className?: string;
  onClick?: any;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <ButtonElement
      className={cn("py-3 px-4 rounded text-xl", { [props.className!]: props.className })}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  background: #5cb85c;
  color: white;
  &:disabled {
    opacity: 0.5;
  }
`;

export default Button;
