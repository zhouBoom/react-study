import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.min.css';
import 'zent/css/index.css';
import reportWebVitals from './reportWebVitals';
import RouterConfig from './router'
import store from './store';
import { Provider } from 'react-redux';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
