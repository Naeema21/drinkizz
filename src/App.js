import React, { Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header/Header';
import Footer from './Layout/footer/footer';
import ScrollButton from './Layout/ScrollButton/ScrollButton'
import ScrollToTop from './Layout/ScrollToTop/ScrollToTop'

function App() {
  //home
  const Home = React.lazy(() => import('./View/Home/Home'))
  //Account
  const Account = React.lazy(() => import('./View/Account/Account'))
  const Product = React.lazy(() => import('./View/Product/Product'))
  const Compare = React.lazy(() => import('./View/Compare/Compare'))
  const Shop = React.lazy(() => import('./View/Shop/Shop'))
  const Cart = React.lazy(()=>import('./View/Cart/Cart'))
  const OrderTracking = React.lazy(()=>import('./View/OrderTracking/OrderTracking'))
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={"loader"}>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route exact path="/ordertracking" component={OrderTracking}></Route>
            <Route exact path="/compare" component={Compare}></Route>
            <Route exact path="/product" component={Product}></Route>
            <Route exact path="/account" component={Account}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/shop" component={Shop}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route exact component={Home}></Route>
          </Switch>
          <ScrollButton />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
