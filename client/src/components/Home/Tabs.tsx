import * as React from "react";
import styled from "styled-components";
import cn from "classnames";

interface ITabsProps {
  className?: string;
  setCurrentTab: (tab: string) => void;
  currentTab?: string;
}

interface ITab {
  isCurrent: boolean;
}

const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
  const checkCurrentTab = (text: string) => {
    return text === currentTab;
  };

  React.useEffect(() => {
    setCurrentTab("Global Feed");
  }, []);

  const { currentTab, setCurrentTab } = props;

  return (
    <div className={cn({ [props.className!]: props.className })}>
      <TabsElement className="flex items-center">
        <Tab isCurrent={checkCurrentTab("Your Feed")}>
          <span onClick={() => setCurrentTab("Your Feed")}>Your Feed</span>
        </Tab>
        <Tab isCurrent={checkCurrentTab("Global Feed")}>
          <span onClick={() => setCurrentTab("Global Feed")}>Global Feed</span>
        </Tab>
      </TabsElement>
      {props.children}
    </div>
  );
};

const TabsElement = styled.div`
  width: 100%;
  color: #aaa;
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

export default Tabs;
