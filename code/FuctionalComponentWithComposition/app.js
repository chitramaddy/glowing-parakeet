import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './app.css';

const Headings = () => (
  <div>
    <h1>Namaste React</h1>
    <h2>Laying the Foundation</h2>
    <h3>With Component composition</h3>
  </div>
);

const TitleComponent = () => (
  <div className="title">
    <Headings />
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<TitleComponent />);
