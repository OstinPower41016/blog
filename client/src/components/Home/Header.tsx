import * as React from "react";
import styled from "styled-components";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <HeaderElement className="text-center">
      <div className="container mx-auto">
        <HElement>conduit</HElement>
        <Description>A place to share your Angular knowledge.</Description>
      </div>
    </HeaderElement>
  );
};

const HeaderElement = styled.header`
  background: #5cb85c;
  color: #ffffff;
  padding: 2rem;
  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%);
`;

const HElement = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  text-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  font-family: "Titillium Web";
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;

export default Header;
