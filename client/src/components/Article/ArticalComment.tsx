import * as React from "react";
import styled from "styled-components";

import Button from "../UI/Button";

interface IArticalCommentProps {}

const ArticalComment: React.FunctionComponent<IArticalCommentProps> = (props) => {
  return (
    <div className="container">
      <Wrapper className="w-7/12">
        <TextArea placeholder="Write a comment..." className="p-5"></TextArea>
        <Footer className="flex justify-end py-3 px-4">
          <ButtonElement className="font-bold">Post Comment</ButtonElement>
        </Footer>
      </Wrapper>
    </div>
  );
};

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  outline: none;
`;

const Wrapper = styled.div`
  border: 1px solid #ccc;
  margin: 2rem auto 0;
`;

const ButtonElement = styled(Button)`
  font-size: 0.875rem !important;
  padding: 0 0.5rem;
`;

const Footer = styled.div`
  background: #f3f3f3;
`;

export default ArticalComment;
