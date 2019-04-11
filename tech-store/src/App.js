import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUsb } from "react-icons/fa";
import styled from "styled-components";

import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import Default from "./pages/Default";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";

import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Sidebar />
        <Sidecart />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/products" component={ProductsPage}></Route>
          <Route path="/product/:id" exact component={SingleProductPage}></Route>
          <Route path="/cart" component={CartPage}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
