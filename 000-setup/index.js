import { gsap } from 'gsap';
gsap.to('body', {duration: 5, background: 'red'});

import React from 'react';
import { render } from 'react-dom';
import './styles.scss'; // parcel installs dependency for this

// React Components map props into elements
function HelloWorld(props) {
  return (
    <div>Hello World</div>
  );
}

render(
  <HelloWorld />,                   // arg-1: Invoked component
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);