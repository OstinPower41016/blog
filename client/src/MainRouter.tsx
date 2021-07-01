import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import NavBar from "./components/NavBar";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp";
import NewArticle from "./views/NewArticle/NewArticle";
import Article from "./views/Article/Article";
import Footer from "./components/Footer";

interface IMainRouterProps {}

const MainRouter: React.FunctionComponent<IMainRouterProps> = (props) => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/editor" component={NewArticle} />
        <Route path="/article/:slug" component={Article} />
      </Switch>
      <Footer />
    </div>
  );
};

export default MainRouter;
