import React from 'react';
import logo from './logo.svg';
import './App.css';
import Premium from './components/Premium';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Premium/>
      <Header/>
      <Page/>
      <Footer/>
    </div>
  );
}

export default App;
