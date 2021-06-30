import * as React from "react";
import styled from "styled-components";
import cn from "classnames";

interface ITagsProps {
  className?: string;
}

const Tags: React.FunctionComponent<ITagsProps> = (props) => {
  return (
    <Box className={cn({ [props.className!]: props.className })}>
      <p className="mb-2">Popular Tags</p>
      <Badge className="rounded px-1">Something</Badge>
    </Box>
  );
};

const Box = styled.div`
  background: #f3f3f3;
  min-width: 235px;
  min-heigth: 188px;
  padding: 5px 10px 10px;
`;

const Badge = styled.span`
  background: #828a91;
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem;
`;

export default Tags;
