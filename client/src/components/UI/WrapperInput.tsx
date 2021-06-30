import * as React from "react";
import styled from "styled-components";

interface IWrapperInputProps {}

const WrapperInput: React.FunctionComponent<IWrapperInputProps> = (props) => {
  return (
    <Box className="flex flex-col justify-center items-center mt-4 w-5/12 mx-auto">
      {props.children}
    </Box>
  );
};

const Box = styled.div`
  & > input:not(:first-of-type) {
    margin-top: 1rem;
  }
  min-width: 540px;
  
`;

export default WrapperInput;
