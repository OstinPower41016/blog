import * as React from "react";
import styled from "styled-components";

import Header from "../../components/Home/Header";
import Tabs from "../../components/Home/Tabs";
import Tags from "../../components/Home/Tags";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <Header />
      <div className="container flex justify-between items-start">
        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
        <TagsWrapper>
          <Tags />
        </TagsWrapper>
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