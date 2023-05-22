import React from 'react';
import '../styles/ListItemsPage.css'


interface Props {
  items: string[];
}

function ListItemsPage({ items }: Props) {
  return (
    <div className="list-items-container">
          <ul className='item-list'>
            {items.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
          </ul>
    </div>
  );
}

export default ListItemsPage;
