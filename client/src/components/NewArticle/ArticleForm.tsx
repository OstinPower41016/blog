import * as React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Input from "../UI/Input";
import Button from "../UI/Button";
import type { TInputEvent } from "../../types";
import { create } from "../api/articles";

interface IArticleFormProps {}

export interface IArticleState {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

const ArticleForm: React.FunctionComponent<IArticleFormProps> = (props) => {
  const [articlesData, setArticlesData] = React.useState<IArticleState>({
    title: "",
    description: "",
    body: "",
    tagList: [],
  });
  const history = useHistory();

  const onInputHandler = (e: TInputEvent, field: string) => {
    if (field === "tagList") {
      setArticlesData({ ...articlesData, [field]: e.target.value.split(" ") });
    } else {
      setArticlesData({ ...articlesData, [field]: e.target.value });
    }
  };

  const submitHandler = async () => {
    const articleData = await create({ ...articlesData });
    history.push(`/article/${articleData.article.slug}`);
  };

  return (
    <WrapperElements className="container flex flex-col w-7/12 justify-center items-center">
      <Input
        placeholder="Article Title"
        className="text-xl"
        onInput={(e: TInputEvent) => onInputHandler(e, "title")}
      />
      <Input
        placeholder="What's this article about ?"
        onInput={(e: TInputEvent) => onInputHandler(e, "description")}
      />
      <InputTextArea
        placeholder="Write your article (in markdowm)"
        onInput={(e: TInputEvent) => onInputHandler(e, "body")}
      />
      <Input placeholder="Enter tags" onInput={(e: TInputEvent) => onInputHandler(e, "tagList")} />
      <Button className="self-end" onClick={submitHandler}>
        Publish Article
      </Button>
    </WrapperElements>
  );
};

const WrapperElements = styled.div`
  > * {
    margin-top: 1rem;
  }
`;

const InputTextArea = styled(Input)`
  min-height: 180px;
`;

export default ArticleForm;
