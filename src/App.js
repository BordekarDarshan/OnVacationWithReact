import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import HatsPage from "./pages/HatsPage/HatsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth, createUserDataAfterSignIn } from "./Firebase/Firebase";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuthObject) => {
        if (userAuthObject) {
          try {
            let storeDataInState = await createUserDataAfterSignIn(
              userAuthObject
            );

            storeDataInState.onSnapshot((data) => {
              this.setState(
                { currentUser: { id: data.id, ...data.data() } },
                () => console.log(this.state)
              );
            });
          } catch (error) {
            console.log("Something Went Wrong", error.message);
          }
        } else {
          this.setState({ currentUser: null });
        }
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <React.Fragment>
        <Navigation currentUser={this.state.currentUser}></Navigation>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/hats" component={HatsPage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
