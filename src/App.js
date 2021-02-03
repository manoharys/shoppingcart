import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import {useSelector} from "react-redux";

function App({ current }) {
  const currentItem = useSelector(state=>state.shop.currentItem);
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          { currentItem ?  <Route exact path="/product/:id" component={SingleItem} />: <Redirect to="/" /> }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
