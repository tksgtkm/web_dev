import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'
import ContainerSample from './components/ContainerSample'
import ContextSample from './components/ContextSample'
import UseStateSample from './components/UseStateSample'
import UseResucerSample from './components/UseReducerSample'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  // <h1>見出し</h1>
  // <App />
  // <Hello />
  // <Name />
  // <Message />
  // <ContainerSample />
  // <ContextSample />
  // <UseStateSample initialValue={0}/>
  <UseResucerSample initialValue={0}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
