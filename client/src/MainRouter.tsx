import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import NavBar from "./components/NavBar";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

interface IMainRouterProps {}

const MainRouter: React.FunctionComponent<IMainRouterProps> = (props) => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default MainRouter;
