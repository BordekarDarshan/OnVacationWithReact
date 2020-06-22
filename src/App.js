import React, { Component } from "react";
import { auth, createUserDataAfterSignIn } from "./Firebase/Firebase";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import HatsPage from "./pages/HatsPage/HatsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { userAction } from "./Redux/User/Action";
import { currentUserSelector } from "./Redux/User/User.Selector";
import Checkout from "./pages/CheckoutPage/Checkout";

export class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { currentUserProp } = this.props;
    auth.onAuthStateChanged(async (userAuthObject) => {
      if (userAuthObject) {
        try {
          let storeDataInState = await createUserDataAfterSignIn(
            userAuthObject
          );

          storeDataInState.onSnapshot((data) => {
            currentUserProp({
              id: data.id,
              ...data.data(),
            });
          });
        } catch (error) {
          console.log("Something Went Wrong", error.message);
        }
      } else {
        currentUserProp(userAuthObject);
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/hats" component={HatsPage} />
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
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUserForRedirect: currentUserSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  currentUserProp: (user) => dispatch(userAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
