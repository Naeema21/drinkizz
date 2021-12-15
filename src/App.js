import React, { Suspense } from 'react';
import './App.css';
import Footer from './Layout/footer/footer';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import Cards from './View/Components/Cards/Cards';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';
>>>>>>> c45b4a229afb6f3f8c3858be53d6410b9dd3b9d7

function App() {
  //home
  const Home = React.lazy(() => import('./View/Home/Home'))
  return (
    <div className="App">
<<<<<<< HEAD
      <Home />
      <Cards/>
      <Footer />
=======
      <BrowserRouter>
        <Suspense fallback={"loader"}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
          <Footer />
        </Suspense>
      </BrowserRouter>
>>>>>>> c45b4a229afb6f3f8c3858be53d6410b9dd3b9d7
    </div>
  );
}

export default App;
