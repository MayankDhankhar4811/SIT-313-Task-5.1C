import React, { useState } from 'react';
import './Menu.css';


const MenuBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
   
    console.log('Searching for:', searchText);
  };

  return (
    <div className="search-bar">
      <p>New Post</p> 
    </div>
  );
};

export default MenuBar;