import { createElement } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './app.css';

const titleDiv = (
  <div className="title">
    <h1>Namaste React</h1>
    <h2>Laying the Foundation</h2>
    <h3>With some Jsx Magic</h3>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(titleDiv);
