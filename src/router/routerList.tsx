import Login from '../pages/Login';
import Admin from '../pages/Admin';
import NotFound from '../pages/Notfound';
import React from 'react';
import Page3 from '../pages/Page3';
import Home from '../pages/Home';

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
    path: "/",
    element: <Admin/>,
    children: [
      {
        path: '/page',
        title: 'Page',
        element: <Page3 />
      },
      {
        path: '/home',
        title: 'Home',
        element: <Home/>,
        children: [
          {
            path: 'class',
            title: 'Home',
            element: <Page3/>
          },
          {
            path: 'lesson',
            title: 'Home',
            element: <Login/>,
          }
        ]
      }
    ]
  }
];
export { otherRouter, pageRouter };
