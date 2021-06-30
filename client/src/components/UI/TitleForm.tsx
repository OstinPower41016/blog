import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cn from "classnames";

interface ITitleFormProps {
  title: string;
  link: string;
  linkDescr: string;
  className?: string;
}

const TitleForm: React.FunctionComponent<ITitleFormProps> = (props) => {
  const { title, link, linkDescr } = props;
  return (
    <div className={cn("text-center", { [props.className!]: props.className })}>
      <Title>{title}</Title>
      <LinkElement to={link}>{linkDescr}</LinkElement>
    </div>
  );
};

const Title = styled.h3`
  font-size: 2.5rem;
`;

const LinkElement = styled(Link)`
  color: #5cb85c;
`;

export default TitleForm;
