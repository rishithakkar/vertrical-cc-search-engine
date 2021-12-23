import React from "react";
import SearchEngine from "../components/SearchEngine";
import { Route, Switch, withRouter } from "react-router";
import CollegeDetails from "../components/CollegeDetails";

const MainPage: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact component={SearchEngine} />
      <Route path="/college-details" component={CollegeDetails} />
    </Switch>
  );
};

export default withRouter(MainPage);
