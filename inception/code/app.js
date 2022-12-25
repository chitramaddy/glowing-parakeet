const heading = React.createElement(
  'h1',
  {
    style: {
      backgroundColor: 'blue',
      textAlign: 'center',
      color: 'white',
      margin: '0',
      padding: '10px',
      fontFamily: 'Helvetica',
    },
  },
  'Hello World With React'
);
const caption = React.createElement(
  'h2',
  {
    style: {
      backgroundColor: 'aquamarine',
      textAlign: 'center',
      color: 'purple',
      margin: '0',
      padding: '5px',
      fontFamily:
        "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif'",
      fontStyle: 'italic',
    },
  },
  'Welcome to the reactive world!'
);

const titleDiv = React.createElement('div', null, [heading, caption]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(titleDiv);
