import * as React from "react";
import styled from "styled-components";

interface IArticleContentProps {
  description: string;
}

const ArticleContent: React.FunctionComponent<IArticleContentProps> = (props) => {
  return (
    <div className="container mt-4">
      <Description className="py-4">{props.description}</Description>
      <div></div>
    </div>
  );
};

const Description = styled.p`
  min-height: 200px;
  font-size: 1.2rem;
  border-bottom: 1px solid #ccc;
`;

export default ArticleContent;
