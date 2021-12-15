import React, { Suspense } from 'react';
import './App.css';
import Footer from './Layout/footer/footer';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  //home
  const Home = React.lazy(() => import('./View/Home/Home'))

  //Account
  const Account = React.lazy(()=>import('./View/Account/Account'))
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={"loader"}>
          <Switch>
            <Route exact path="/account" component={Account}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route exact  component={Home}></Route>
          </Switch>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
