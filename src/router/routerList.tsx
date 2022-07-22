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
        key: '1',
        title: 'Page',
        element: <Page3 />
      },
      {
        path: '/home',
        key: '2',
        title: 'Home',
        element: <Home/>,
        children: [
          {
            path: 'class',
            key: '2-1',
            title: 'Class',
            element: <Page3/>
          },
          {
            path: 'lesson',
            key: '2-2',
            title: 'Lesson',
            element: <Login/>,
          }
        ]
      }
    ]
  }
];
export { otherRouter, pageRouter };
