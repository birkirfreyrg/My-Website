import React from "react";
import "./App.css";
import FrontPageBanner from "./components/FrontPageBanner";
import ListItemsPage from "./components/ListItemsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const items: string[] = [
    "Single bottle",
    "twelve pack",
    "Gorilla Water Jug",
    "Special Deal",
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
