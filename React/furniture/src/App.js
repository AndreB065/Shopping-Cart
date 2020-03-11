import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnlyOne from "../src/components/GetOne";
import ErrorPage from "../src/components/Error";
import UpdatePage from "../src/components/updateOne";
import AddPage from "../src/components/Add";
import MainPage from "../src/components/Master";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/v1/admin/:id" component={OnlyOne} exact></Route>
        <Route path="/v1/update/:id" component={UpdatePage} exact>
        </Route>
        <Route path="/admin/add" exact>
          <AddPage />
        </Route>
        <Route path="/">
          <ErrorPage />
        </Route>
        <Route path="/admin/error" exact>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;