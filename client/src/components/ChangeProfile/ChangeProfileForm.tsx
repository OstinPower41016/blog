import * as React from "react";
import styled from "styled-components";
import cn from "classnames";

interface IChangeProfileFormProps {
  className?: string;
}

const ChangeProfileForm: React.FunctionComponent<IChangeProfileFormProps> = (props) => {
  return (
    <div className={cn({ [props.className!]: props.className })}>
      <Title>Your Settings</Title>
    </div>
  );
};

const Title = styled.p`
  font-size: 2.5rem;
`;

export default ChangeProfileForm;
