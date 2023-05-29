import React from "react";
import "./App.css";
import FrontPageBanner from "./components/FrontPageBanner";
import ListItemsPage from "./components/ListItemsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleBottle from "./images/singlebottle.png";

function App() {
  const items = [
    { id: 1, name: 'Item 1', price: 10, photo: SingleBottle },
    { id: 2, name: 'Item 2', price: 20, photo: SingleBottle },
    { id: 3, name: 'Item 3', price: 30, photo: SingleBottle },
    { id: 1, name: 'Item 4', price: 10, photo: SingleBottle },
    { id: 2, name: 'Item 5', price: 20, photo: SingleBottle },
    { id: 3, name: 'Item 6', price: 30, photo: SingleBottle },
    { id: 3, name: 'Item 7', price: 30, photo: SingleBottle },
    { id: 4, name: 'Item 8', price: 40, photo: SingleBottle }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <FrontPageBanner />
        {items.length > 0 ? (
          <ListItemsPage items={items} />
        ) : (
          <h1>
            No Items available at the moment. <h3>Welcome back later!</h3>
          </h1>
        )}
        <Footer />
      </header>
    </div>
  );
}

export default App;
