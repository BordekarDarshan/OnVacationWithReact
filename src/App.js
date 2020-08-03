import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { checkUserSession } from "./Redux/User/Action";
import { currentUserSelector } from "./Redux/User/User.Selector";
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Checkout = lazy(() => import("./pages/CheckoutPage/Checkout"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";

export class App extends Component {
  unsubscribe = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Switch>
          <Suspense fallback={<div>...Loading</div>}>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              path="/signin"
              exact
              render={() =>
                this.props.currentUserForRedirect ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
            <Route path="/checkout" exact component={Checkout}></Route>
          </Suspense>
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUserForRedirect: currentUserSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
