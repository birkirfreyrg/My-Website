import React from "react";
import "../styles/ListItemsPage.css";

interface Item {
  id: number;
  name: string;
  price: number;
  photo?: string;
}

interface Props {
  items: Item[];
}

const ListItemsPage: React.FC<Props> = ({ items }) => {
  return (
    <>
      <h1 className="we-recommend">We recommend!</h1>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.photo} alt={item.name} className="item-photo" />
            <div className="item-info">
              <div className="item-name">{item.name}</div>
              <div className="item-price">{item.price} isk</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListItemsPage;
