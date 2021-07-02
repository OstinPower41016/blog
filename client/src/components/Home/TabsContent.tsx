import * as React from "react";
import isEmpty from "lodash/isEmpty";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

import ArticalUser from "../Article/ArticleUser";
import { Tag } from "../Article/ArticleContent";

import { getArticles } from "../api/articles";

interface ITabsContentProps {}

interface IAllArticles {
  articleId: string;
  body: string;
  date: string;
  description: string;
  tagList: string[];
  title: string;
  username: string;
  image: string;
  favoritesCount: number;
}

const TabsContent: React.FunctionComponent<ITabsContentProps> = (props) => {
  const [articles, setArticles] = React.useState<IAllArticles[]>([]);

  React.useEffect(() => {
    getArticles().then((articles) => {
      if (!articles) {return}
      setArticles(
        articles.map((art: any) => {
          const {
            slug: articleId,
            body,
            updatedAt: date,
            description,
            tagList,
            title,
            author: { username: username },
            author: { image: image },
            favoritesCount,
          } = art;
          return {
            articleId,
            body,
            date,
            description,
            tagList,
            title,
            username,
            image,
            favoritesCount,
          };
        }),
      );
    });
  }, []);
  console.log(articles);

  return (
    <Wrapper>
      {isEmpty(articles) && <p>No articles are here...yet</p>}

      {!isEmpty(articles) &&
        articles.map((article) => {
          const { image, username, date, favoritesCount, title, description, tagList } = article;
          const articalUserProps = { image, username, date };
          return (
            <ArticleItem className="pt-4">
              <div className="flex justify-between">
                <ArticalUser {...articalUserProps} usernameColor="#5cb85c" />
                <LikeWrapper className="flex items-center">
                  <FcLike className="mr-1" />
                  <p>{favoritesCount}</p>
                </LikeWrapper>
              </div>

              <div className="pb-8 mt-8">
                <p className="font-semibold text-2xl mt-1">{title}</p>
                <DescriptiomArticle>{description}</DescriptiomArticle>
                <div className="flex justify-between items-center">
                  <ReadMore to="/" className="mt-8 block">
                    Read more....
                  </ReadMore>
                  <TagWrapper>
                    {tagList.map((tag) => {
                      return <Tag key={tag + Math.random}>{tag}</Tag>;
                    })}
                  </TagWrapper>
                </div>
              </div>
            </ArticleItem>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 72%;
`;

const ArticleItem = styled.div`
  border-top: 1px solid #ccc;
`;

const DescriptiomArticle = styled.p`
  color: #999;
`;

const ReadMore = styled(Link)`
  color: #999;
  font-size: 0.8rem;
`;

const LikeWrapper = styled.div`
  border: 1px solid #5cb85c;
  padding: 0.3rem 0.2rem;
  color: #5cb85c;
  & > svg > path {
    fill: #5cb85c;
  }
`;

const TagWrapper = styled.div`
  > div:not(:last-of-type) {
    margin-right: 0.3rem;
  }
`;

export default TabsContent;
