import * as React from "react";
import styled from "styled-components";
import cn from "classnames";

interface ITabsProps {
  className?: string;
}

const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
  return (
    <div className={cn({ [props.className!]: props.className })}>
      <TabsElement className="flex items-center">
        <Tab>
          <TabName>Your Feed</TabName>
        </Tab>
        <Tab>
          <TabName>Global Feed</TabName>
        </Tab>
      </TabsElement>
    </div>
  );
};

const TabsElement = styled.div`
  width: 100%;
  color: #aaa;
  border-bottom: 1px solid #ccc;

  & > div {
    margin: 0.5rem 1rem;
  }
`;

const Tab = styled.div`
  transition: 1s;
  &:hover {
    color: #000;
  }
`;

const TabName = styled.span``;

export default Tabs;
