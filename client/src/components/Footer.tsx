import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="container">
      <LinkElement to="/">condult</LinkElement>
    </div>
  );
};

const LinkElement = styled(Link)`
  color: #5cb85c !important;
  font-weight: bold;
`;

export default Footer;
