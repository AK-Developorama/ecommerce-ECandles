import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM, { render } from "react-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Navbar from "./Navbar";
import Cart from "./Cart";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* these ones don't change + Footer */}
        <Navbar />
        <NavMenu />
        <Cart />
        <Switch>
           {/* use the product handle as it is exported from ProductPage */}
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          {/* always put home page last: */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
{/*         <ViewAllProducts/>
 */}        <Footer />
      </Router>
    </div>
  );
}

export default App;
