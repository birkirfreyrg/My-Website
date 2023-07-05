import React from "react";
import "./App.css";
import FrontPageBanner from "./components/FrontPageBanner";
import ListItemsPage from "./components/ListItemsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import animatedWater from "./images/water-animated.jpg";

function App() {
  const items = [
    { id: 1, name: "Single Bottle", price: 150, photo: animatedWater },
    { id: 2, name: "Three Bottles", price: 289, photo: animatedWater },
    { id: 3, name: "Six Pack", price: 599, photo: animatedWater },
    { id: 1, name: "Twelve Pack", price: 1150, photo: animatedWater },
    { id: 2, name: "Twenty Four Bottles", price: 1990, photo: animatedWater },
    { id: 3, name: "One Hundered Bottles", price: 8900, photo: animatedWater },
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
