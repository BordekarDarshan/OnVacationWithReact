import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import { Route, Switch, Redirect } from "react-router-dom";
import HatsPage from "./pages/HatsPage/HatsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth, createUserDataAfterSignIn } from "./Firebase/Firebase";
import { connect } from "react-redux";
import { userAction } from "./Redux/User/Action";

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
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUserForRedirect: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  currentUserProp: (user) => dispatch(userAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
