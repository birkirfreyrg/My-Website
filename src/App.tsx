import React from 'react';
import './App.css';
import FrontPageBanner from './components/FrontPageBanner';
import ListItemsPage from './components/ListItemsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <FrontPageBanner />
        <ListItemsPage />
        <Footer />
      </header>
    </div>
  );
}

export default App;
