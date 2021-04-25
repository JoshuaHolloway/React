import React from 'react';
import { render } from 'react-dom';
import './styles.scss'; // parcel installs dependency for this

import MyComponent from './MyComponent.js';

// React Components map props into elements
function HelloWorld(props) {
  return (
    <MyComponent></MyComponent>
  );
}

render(
  <HelloWorld />,                   // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);