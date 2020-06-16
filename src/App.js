import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import HatsPage from "./pages/HatsPage/HatsPage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <React.Fragment>
      <Navigation></Navigation>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
