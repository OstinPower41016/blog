import * as React from "react";
import styled from "styled-components";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

interface IButtonControlArticleProps {
  type: "Edit" | "Delete";
}

interface IButtonProps {
  typeContent: string;
}

const ButtonControlArticle: React.FunctionComponent<IButtonControlArticleProps> = (props) => {
  let Icon, text;

  if (props.type === "Edit") {
    Icon = GrEdit;
    text = "Edit Article";
  } else {
    Icon = MdDelete;
    text = "Delete Article";
  }

  return (
    <Button className="flex items-center py-1 px-1" typeContent={props.type}>
      <Icon className="mr-1" />
      {text}
    </Button>
  );
};

const Button = styled.button`
  border: 1px solid ${(props: IButtonProps) => (props.typeContent === "Edit" ? "#ccc" : "#b85c5c")};
  font-size: 0.875rem;
  color: ${(props: IButtonProps) => (props.typeContent === "Edit" ? "#ccc" : "#b85c5c")};
  & > svg > path {
    fill: ${(props: IButtonProps) => (props.typeContent === "Edit" ? "#ccc" : "#b85c5c")};
  }
`;

export default ButtonControlArticle;
