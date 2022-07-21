import Login from '../pages/Login';
import Admin from '../pages/Admin';
import NotFound from '../pages/Notfound';
import React from 'react';

const otherRouter = [
  {
    path: '/404',
    title: '未找到页面',
    element: <NotFound />
  },
  {
    from: '*',
    to: '/404'
  }
];

const pageRouter = [
  {
    path: '/login',
    title: 'Login',
    element: <Login />
  },
  {
    path: '/',
    title: 'Admin',
    element: <Admin />
  }
];
export { otherRouter, pageRouter };
