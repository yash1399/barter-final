import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
// pages for this product
import LandingPage from "../components/views/LandingPage/LandingPage.js";
import LoginPage from "../components/views/LoginPage/LoginPage.js";
import RegisterPage from "../components/views/RegisterPage/RegisterPage.js";
import NavBar from "../components/views/NavBar/NavBar";
import Footer from "../components/views/Footer/Footer"
import UploadProductPage from '../components/views/UploadProductPage/UploadProductPage'
import DetailProductPage from '../components/views/DetailedProduct/DetailProductPage';
import CartPage from '../components/views/CartPage/CartPage';
import AboutUs from './views/AboutUs/AboutUs';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/about-us" component={Auth(AboutUs, null)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          <Route exact path="/user/connection" component={Auth(CartPage, true)} />
          

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App; 
