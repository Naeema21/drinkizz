import React, { Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header/Header';
import Footer from './Layout/footer/footer';
import ScrollButton from './Layout/ScrollButton/ScrollButton'
import ScrollToTop from './Layout/ScrollToTop/ScrollToTop'

function App() {
  const Home = React.lazy(() => import('./View/Home/Home'))
  const Product = React.lazy(() => import('./View/Product/Product'))
  const Compare = React.lazy(() => import('./View/Compare/Compare'))
  const ProductDetail = React.lazy(() => import('./View/ProductDetails/ProductDetails'))
  const Cart = React.lazy(()=>import('./View/Cart/Cart'))
  const OrderTracking = React.lazy(()=>import('./View/OrderTracking/OrderTracking'))
  const CheckOutDetails = React.lazy(()=>import('./View/CheckOutDetails/CheckOutDetails'))
  const Account_Orders_History = React.lazy(()=>import('./View/Account_Orders_History/Account_Orders_History'))
  const Orders = React.lazy(()=>import('./View/Account_Orders_History/Orders'))
  const Wishlist = React.lazy(()=>import('./View/Account_Orders_History/Wishlist'))
  const Support = React.lazy(()=>import('./View/Account_Orders_History/Support'))
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div id="loader"></div>}>
          <ScrollToTop />
          <Header />
          <div id="main" style={{overflow:'hidden'}}>
          <Switch>
            <Route exact path="/orders" component={Orders}></Route>
            <Route exact path="/wishlist" component={Wishlist}></Route>
            <Route exact path="/support" component={Support}></Route>
            <Route exact path="/account-orders-history" component={Account_Orders_History}></Route>
            <Route exact path="/order-tracking" component={OrderTracking}></Route>
            <Route exact path="/compare/:id" component={Compare}></Route>
            <Route exact path="/product" component={Product}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/product-details/:id" component={ProductDetail}></Route>
            <Route exact path="/checkout-details" component={CheckOutDetails}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route exact component={Home}></Route>
          </Switch>
          </div>
          <ScrollButton />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
