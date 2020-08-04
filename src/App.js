import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { checkUserSession } from "./Redux/User/Action";
import { currentUserSelector } from "./Redux/User/User.Selector";
import OnlySpinner from "./components/OnlySpinner/OnlySpinner";
import ErrorBoundary from "./components/Error/ErrorBoundary";
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Checkout = lazy(() => import("./pages/CheckoutPage/Checkout"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/SignInAndSignUpPage/SignInAndSignUpPage")
);

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
        <Suspense fallback={<OnlySpinner />}>
          <Navigation></Navigation>
          <Switch>
            <ErrorBoundary>
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
            </ErrorBoundary>
          </Switch>
        </Suspense>
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
