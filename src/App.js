import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <React.Fragment>
      <Navigation></Navigation>
      <HomePage></HomePage>
    </React.Fragment>
  );
}

export default App;
