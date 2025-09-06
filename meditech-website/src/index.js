import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// Disable all console messages for security and clean output
(function() {
  // Suppress React DevTools download message
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
    isDisabled: true,
    supportsFiber: true,
    inject: () => {},
    onCommitFiberRoot: () => {},
    onCommitFiberUnmount: () => {},
  };
  
  // Disable all console methods completely
  const noop = () => {};
  const methods = [
    'log', 'warn', 'error', 'info', 'debug', 'trace', 'group', 'groupEnd',
    'time', 'timeEnd', 'count', 'clear', 'table', 'dir', 'dirxml', 'assert',
    'groupCollapsed', 'timeLog', 'profile', 'profileEnd', 'timeStamp'
  ];
  
  methods.forEach(method => {
    if (console[method]) {
      console[method] = noop;
    }
  });
  
  // Override console constructor
  if (window.console) {
    window.console = new Proxy(console, {
      get: () => noop,
      set: () => true
    });
  }
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Disable web vitals reporting to prevent console messages
// reportWebVitals();
