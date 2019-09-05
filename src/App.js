import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';

const data = {
  header: {
    title: 'Tech BBQ'
  },
  footer: {
    copyright: 'Copyright &copy; 2019 Tech Team'
  }
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header data={data.header} />
        <Banner />
        <Footer data={data.footer} />
      </div>
    );
  }
}

export default App;
