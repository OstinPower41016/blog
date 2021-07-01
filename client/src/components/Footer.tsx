import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <FooterElement className="py-4">
      <div className="container">
        <Wrapper className="flex items-center">
          <LinkElement to="/" className="mr-2">
            condult
          </LinkElement>
          <Text>
            {" "}
            © 2021. An interactive learning project from{" "}
            <LinkElementWithoutRouter href="https://thinkster.io/">
              Thinkster
            </LinkElementWithoutRouter>
            . Code licensed under MIT.
          </Text>
        </Wrapper>
      </div>
    </FooterElement>
  );
};

const Wrapper = styled.div`
  color: #bbb;
`;

const Text = styled.p`
  font-size: 0.8rem;
`;

const LinkElement = styled(Link)`
  color: #5cb85c !important;
  font-weight: bold;
`;

const LinkElementWithoutRouter = styled.a`
  color: #5cb85c !important;
`;

const FooterElement = styled.footer`
  background: #373a3c;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default Footer;
