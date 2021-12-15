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
  const Account = React.lazy(()=>import('./View/Account/Account'))
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={"loader"}>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route exact path="/account" component={Account}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route exact  component={Home}></Route>
          </Switch>
          <ScrollButton />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
