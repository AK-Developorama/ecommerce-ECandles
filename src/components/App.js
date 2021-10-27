import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Navbar from "./Navbar";
import Cart from "./Cart";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import AlwaysScrollToTop from "./AlwaysScrollToTop";
import AllProductsCatalogue from "../pages/AllProductsCatalogue";
import ShippingReturns from '../pages/ShippingReturns'
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import HelpFAQs from "../pages/HelpFAQs";
import AboutUs from "../pages/About Us";
import Sustainability from "../pages/Sustainability";

function App() {
  return (
    <div className="App">
      <Router>
        <AlwaysScrollToTop>
          <Navbar />
          <NavMenu />
          <Cart />
          <Switch>
            <Route path="/products-catalogue">
              <AllProductsCatalogue />
            </Route>
            <Route path="/shipping-returns">
              <ShippingReturns />
            </Route>
            <Route path="/help-FAQs">
              <HelpFAQs />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/sustainability">
              <Sustainability />
            </Route>
            {/* use the product handle as it is exported from ProductPage */}
            <Route path="/products/:handle">
              <ProductPage />
            </Route>
            {/* always put home page last: */}
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </AlwaysScrollToTop>
      </Router>
    </div>
  );
}

export default App;
