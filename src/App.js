import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const TopicsList = () => {
  return (
    <div>
      <Link to='/topics' />
      <h1>Topic List</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
