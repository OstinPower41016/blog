import * as React from "react";
import styled from "styled-components";

import Header from "../../components/Home/Header";
import Tabs from "../../components/Home/Tabs";
import Tags from "../../components/Home/Tags";
import TabsContent from "../../components/Home/TabsContent";
import useAuthenticate from "../../hooks/use/Authenticate";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const isAuthenticate = useAuthenticate();
  const [currentTab, setCurrentTab] = React.useState('global')

  const onTabSetHandler = (tab: string) => {
    setCurrentTab(tab)
  }

  return (
    <div className="mt-8">
      {!isAuthenticate && <Header />}
      <div className="container flex justify-between items-start">
        <TabsWrapper>
          <Tabs setCurrentTab={onTabSetHandler} currentTab={currentTab}/>
        </TabsWrapper>
        <TagsWrapper>
          <Tags />
        </TagsWrapper>
      </div>
      <div className="container">
        <TabsContent />
      </div>
    </div>
  );
};

const TabsWrapper = styled.div`
  flex: 0 0 72%;
`;
const TagsWrapper = styled.div`
  flex: 0 0 25%;
`;

export default Home;
