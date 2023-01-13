import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className="header">
    <div>
      <h1 className="logo">Chitra Madhan</h1>
    </div>
    <div className="search">
      <button className="search-input" role="input">
        <FontAwesomeIcon
          className="search-icon"
          icon={faSearch}
        ></FontAwesomeIcon>
      </button>
    </div>
    <div className="profile">
      <FontAwesomeIcon className="user" icon={faUser}></FontAwesomeIcon>
    </div>
  </header>
);

const TitleComponent = () => (
  <div className="title">
    <Header />
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<TitleComponent></TitleComponent>);
