import React from "react";
import "../styles/ListItemsPage.css";

interface Props {
  items: string[];
}

function ListItemsPage({ items }: Props) {
  return (
    <>
      <h1>We recommend!</h1>
      <div className="list-items-container">
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListItemsPage;
