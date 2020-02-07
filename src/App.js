import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ProductList from "./components/product/ProductList";
import Cart from "./components/cart/Cart";
import Landing from "./components/layout/Landing";
import "./assets/scss/main.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/shop" component={ProductList} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
