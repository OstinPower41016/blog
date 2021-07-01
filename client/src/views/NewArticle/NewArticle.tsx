import * as React from "react";

import ArticleForm from "../../components/NewArticle/ArticleForm";

interface INewArticleProps {}

const NewArticle: React.FunctionComponent<INewArticleProps> = (props) => {
  return (
    <>
      <ArticleForm />
    </>
  );
};

export default NewArticle;
