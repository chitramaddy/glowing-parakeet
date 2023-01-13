import { createElement } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './app.css';

const titleDiv = createElement('div', { className: 'title' }, [
  createElement('h1', { key: 'h1' }, 'Namaste React'),
  createElement('h2', { key: 'h2' }, 'Laying the Foundation'),
  createElement('h3', { key: 'h3' }, 'Bear Bones with React Create Element'),
]);

const root = createRoot(document.getElementById('root'));
root.render(titleDiv);
