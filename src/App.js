import React from 'react';
import Home from './View/Home/Home'
import './App.css';
import Footer from './Layout/footer/footer';
import 'bootstrap/dist/css/bootstrap.css';
import Cards from './View/Components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Home />
      <Cards/>
      <Footer />
    </div>
  );
}

export default App;
