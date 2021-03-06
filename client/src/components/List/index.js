import React from 'react';

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
      <ul className='list-group'>{children}</ul>
  );
}

export function ListItem({ children }) {
  return <li className='list-group-item'>{children}</li>;
}
