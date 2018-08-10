// three args: element type, element attributes, children
// this is the same as JSX of <h1 id="header">Hello World</h1>
// under the hood, webpack is translating JSX into the below line
const h1 = React.createElement('h1', { id: 'header' }, 'Hello World');

const FirstComponent = () => {
  return React.createElement('div', { id: 'wrapper' }, [h1]);
};

// element to render, the node to append it to
ReactDOM.render(
  React.createContext(FirstComponent),
  document.getElementById('app')
);
