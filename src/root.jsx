import ReactDOM from 'react-dom';
import React from 'react';
import App from './App'

export function render(element, props) {
  ReactDOM.render(<App {...props} />, element);
}

export function teardown(element) {
  ReactDOM.unmountComponentAtNode(element);
}