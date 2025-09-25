import React from 'react';
import styles from './style.module.css';

function Navbar({ data }) {
  const count = data.filter(item => item.added).length;
  return (
    <div className="py-1 px-2 flex items-center justify-between">
      <h1 className={`${styles['main-logo']}`}>Orange</h1>
      <div className="flex items-center space-x-2 bg-orange-300 py-1 px-2 rounded-md">
        <h3 className="">Favorites</h3>
        <h4 className="rounded-full bg-orange-100 w-6 h-6 flex items-center justify-center text-xs">{ count }</h4>
      </div>
    </div>
  )
}

export default Navbar