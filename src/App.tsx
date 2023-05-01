import React from 'react';
import logo from './logo.svg';
import './App.css';
import FrontPageBanner from './components/FrontPageBanner';
import ListItemsPage from './components/ListItemsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FrontPageBanner />
       <ListItemsPage />
      </header>
    </div>
  );
}

export default App;
