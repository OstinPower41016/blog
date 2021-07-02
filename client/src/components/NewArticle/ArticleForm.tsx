import * as React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

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

export interface IArticleStateStringTags {
  title: string;
  description: string;
  body: string;
  tags: string;
}

type TKeyDownEvent = React.KeyboardEvent<HTMLInputElement>;

interface IPropsTag {
  tagName: string;
  onDeleteTag: () => void;
}

const Tag: React.FC<IPropsTag> = ({ tagName, onDeleteTag }) => {
  return (
    <TagElement className="flex items-center f rounded-xl py-1 px-1">
      <button onClick={onDeleteTag}>
        <IoIosCloseCircle />
      </button>
      <p className="ml-2">{tagName}</p>
    </TagElement>
  );
};

const TagElement = styled.div`
  background: #818a90;
  color: white;
  font-size: 0.8rem;
`;

const ArticleForm: React.FunctionComponent<IArticleFormProps> = (props) => {
  const history = useHistory();
  const [tags, addTags] = React.useState<string[]>([]);
  const [articlesData, setArticlesData] = React.useState<IArticleStateStringTags>({
    title: "",
    description: "",
    body: "",
    tags: "",
  });
  const [isLoading, setStatusLoading] = React.useState(false)


  const onInputHandler = (e: TInputEvent, field: string) => {
    setArticlesData({ ...articlesData, [field]: e.target.value });
  };

  const submitHandler = async () => {
    setStatusLoading(true)
    const { tags: tagsDataString, ...restDataArticles } = articlesData;
    const articleData = await create({ ...restDataArticles, tagList: tags });
    
    history.push(`/article/${articleData.article.slug}`);
  };

  const onKeyDownTagHandler = (e: TKeyDownEvent) => {
    if (e.key === "Enter") {
      addTags([...tags, articlesData.tags]);
    }
  };

  const onDeleteTag = (idx: number) => {
    const withoutRemoveElement = [...tags.slice(0, idx), ...tags.slice(idx + 1)];
    addTags(withoutRemoveElement);
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

      <Input
        placeholder="Enter tags"
        onInput={(e: TInputEvent) => onInputHandler(e, "tags")}
        value={articlesData.tags}
        onKeyDown={(e: TKeyDownEvent) => onKeyDownTagHandler(e)} 
      />
      <TagsList className="flex w-full">
        {tags.map((tag, idx) => {
          return (
            <Tag tagName={tag} key={tag + Math.random()} onDeleteTag={() => onDeleteTag(idx)} />
          );
        })}
      </TagsList>
      <Button className="self-end" onClick={submitHandler} >
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

const TagsList = styled.div`
  & > div {
    margin-right: 0.5rem;
  }
`;

const InputTextArea = styled(Input)`
  min-height: 180px;
`;

export default ArticleForm;
