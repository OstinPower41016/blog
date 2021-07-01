import * as React from "react";
import styled from "styled-components";
import cn from "classnames";

interface ITabsProps {
  className?: string;
}

interface ITab {
  isCurrent: boolean;
}

const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
  const [currentTab, setCurrentTab] = React.useState<string>("Global Feed");

  const checkCurrentTab = (text: string) => {
    return text === currentTab;
  };

  return (
    <div className={cn({ [props.className!]: props.className })}>
      <TabsElement className="flex items-center">
        <Tab isCurrent={checkCurrentTab("Your Feed")}>
          <TabName onClick={() => setCurrentTab("Your Feed")}>Your Feed</TabName>
        </Tab>
        <Tab isCurrent={checkCurrentTab("Global Feed")}>
          <TabName onClick={() => setCurrentTab("Global Feed")}>Global Feed</TabName>
        </Tab>
      </TabsElement>
    </div>
  );
};

const TabsElement = styled.div`
  width: 100%;
  color: #aaa;
  border-bottom: 1px solid #ccc;
`;

const Tab = styled.div`
  transition: 0.5s;
  color: ${(props: ITab) => (props.isCurrent ? "#5cb85c" : "inherit")};
  position: relative;
  padding: 0.5rem 1rem;
  border-bottom: ${(props: ITab) => (props.isCurrent ? "2px solid #5cb85c" : "")};
  cursor: ${(props: ITab) => (!props.isCurrent ? "pointer" : "")};
  user-select: none;
  &:hover {
    color: ${(props: ITab) => (props.isCurrent ? "" : "#000")};
  }
`;

const TabName = styled.span``;

export default Tabs;
