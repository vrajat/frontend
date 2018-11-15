import React from 'react';
import './App.css';
import SqlText from './components/SqlText';
import Header from './components/Header';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <SqlText/>
      <Footer/>
    </div>
  );
};

export default App;
