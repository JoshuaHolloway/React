import { gsap } from 'gsap';
gsap.to('body', {duration: 5, background: 'red'});

import React from 'react';
import { render } from 'react-dom';
import './styles.scss'; // parcel installs dependency for this


function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
} 

const josh = {
  firstName: 'Josh',
  lastName: 'Holloway'
};

const element = (
  // -JSX expressions become regular JS-function calls 
  //  and evaluate to JS-objects
  //
  // -Babel compiles this JSX into:
  //    const element = React.createElement(
  //      'h1',
  //      {className: 'greeting'},
  //      'Hello, Josh Holloway'
  //    );
  //
  // -React.createELement essentially creates this JS-object:
  //    const element = {
  //      type: 'h1',
  //      props: {
  //        className: 'greeting',
  //        children: 'Hello, Josh Holloway'
  //      }
  //    };
  // 
  // -This final JS-object is called a REACT-ELEMENT
  <h1 className="greeting">
    Hello, {formatName(josh)}
  </h1>
);

// React Components map props into elements
// function Comp(props) {
//   return element;
// }

render(
  element,                          // arg-1: Element
  document.querySelector('#root')   // arg-2: DOM node we want to attach to
);