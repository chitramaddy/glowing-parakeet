import { createElement } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './app.css';

const TitleComponent = () => (
  <div className="title">
    <h1 key="first">Namaste React</h1>
    <h2 key="second">Laying the Foundation</h2>
    <h3 key="third">With Functional Components</h3>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<TitleComponent greeting="Namaste" />);
