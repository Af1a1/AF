import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Hello to React</h1>
      <Footer />
    </div>
  );
};

export default App;
