import * as React from "react";
import styled from "styled-components";

import { IArticleState } from "../NewArticle/ArticleForm";
import ArticleUser from "./ArticleUser";
import ButtonControlArticle from "./ButtonControlArticle";

interface IArticleHeaderProps {
  title: string;
  author: string;
  image: string;
  date: string;
}

const ArticleBanner: React.FunctionComponent<IArticleHeaderProps> = (props) => {
  const { title, author, image, date } = props;
  return (
    <Banner className="py-8">
      <div className="container">
        <Title>{title}</Title>
        <div className="flex items-center mt-8">
          <div className="w-2/12">
            <ArticleUser username={author} image={image} date={date} />
          </div>
          <ButtonControlArticle type="Edit" />
          <ButtonControlArticle type="Delete" />
        </div>
      </div>
    </Banner>
  );
};

const Banner = styled.div`
  background: #333333;
  color: white;
  & > div > div > button:first-of-type {
  }
`;

const Title = styled.p`
  font-size: 2.8rem;
`;

export default ArticleBanner;
