import React from 'react';
import ReactDOM from 'react-dom';

// creating a component with JSX
const FirstComponent = () => {
  return (
    <div id="wrapper">
      <h1 id="header">Hello World</h1>
    </div>
  );
};

// element to render, the node to append it to
ReactDOM.render(<FirstComponent />, document.getElementById('app'));
