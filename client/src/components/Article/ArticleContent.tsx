import * as React from "react";
import styled from "styled-components";

interface IArticleContentProps {
  description: string;
  tagList: string[];
}

const ArticleContent: React.FunctionComponent<IArticleContentProps> = (props) => {
  return (
    <Box className="container mt-4 pb-4">
      <Description className="py-4">{props.description}</Description>
      {props.tagList.map((tag) => {
        return <Tag key={tag + Math.random()}>{tag}</Tag>;
      })}
    </Box>
  );
};

const Box = styled.div`
  border-bottom: 1px solid #ccc;
  & > div:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Description = styled.p`
  min-height: 100px;
  font-size: 1.2rem;
`;

export const Tag = styled.div`
  border: 1px solid;
  display: inline-block;
  color: #aaa !important;
  padding: 0.2rem;
  font-size: 0.8rem;
  border-radius: 0.75rem;
`;

export default ArticleContent;
