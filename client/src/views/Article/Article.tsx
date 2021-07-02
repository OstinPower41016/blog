import * as React from "react";

import { useParams } from "react-router-dom";

import { getArticle } from "../../components/api/articles";
import { IArticleState } from "../../components/NewArticle/ArticleForm";
import ArticleBanner from "../../components/Article/ArticleBanner";
import ArticleContent from "../../components/Article/ArticleContent";
import ArticleUser from "../../components/Article/ArticleUser";
import ButtonControlArticle from "../../components/Article/ButtonControlArticle";
import ArticalComment from "../../components/Article/ArticalComment";

interface IArticleWithAuthor extends IArticleState {
  author: string;
  image: string;
  date: string;
}

interface IArticleProps {}

const Article: React.FunctionComponent<IArticleProps> = (props) => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = React.useState<IArticleWithAuthor>({
    body: "",
    title: "",
    tagList: [],
    description: "",
    author: "",
    image: "",
    date: "",
  });

  React.useEffect(() => {
    getArticle(slug).then(
      ({
        body,
        title,
        tagList,
        description,
        author: { username: author, image },
        createdAt: date,
      }) => setArticle({ body, title, tagList, description, author, image, date }),
    );
  }, [slug]);

  const { body, tagList, description, ...forArticleBanner } = article;
  const { author, image, date, title } = forArticleBanner;
  const ArticleUserProps = { username: author, date, image };

  return (
    <>
      <ArticleBanner {...forArticleBanner} />
      <ArticleContent description={description} tagList={tagList}/>
      <div className="flex justify-center items-center mt-3">
        <ArticleUser {...ArticleUserProps} className="mr-4" usernameColor="#5cb85c" />
        <ButtonControlArticle type="Edit" />
        <ButtonControlArticle type="Delete" />
      </div>
      <div>
        <ArticalComment />
      </div>
    </>
  );
};

export default Article;
