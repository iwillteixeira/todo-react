import React from 'react';
import ReactDom from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/app.css';

ReactDom.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.querySelector('#root'),
);
