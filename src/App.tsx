import React from 'react';
import './App.css';
import FrontPageBanner from './components/FrontPageBanner';
import ListItemsPage from './components/ListItemsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <FrontPageBanner />
        <ListItemsPage items={items}/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
