import Login from '../pages/Login';
import Admin from '../pages/Admin';
import NotFound from '../pages/Notfound';
import React from 'react';
import Page3 from '../pages/Page3';
// import Home from '../pages/Home';
import Home from '../pages/home';
import Todo from '../pages/todo';

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
        path: '/home',
        key: '1',
        title: 'Home',
        element: <Home />
      },
      {
        path: '/page',
        key: '2',
        title: 'Page',
        element: <Page3 />
      },
      {
        path: '/todo',
        key: '3',
        title: 'ToDo',
        element: <Todo />
      },
      // {
      //   path: '/home',
      //   key: '3',
      //   title: 'Home',
      //   element: <Home/>,
      //   children: [
      //     {
      //       path: 'class',
      //       key: '3-1',
      //       title: 'Class',
      //       element: <Page3/>
      //     },
      //     {
      //       path: 'lesson',
      //       key: '3-2',
      //       title: 'Lesson',
      //       element: <Login/>,
      //     }
      //   ]
      // }
    ]
  }
];
export { otherRouter, pageRouter };
