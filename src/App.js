import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default App;
