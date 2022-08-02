import Login from '../pages/Login';
import Admin from '../pages/Admin';
import NotFound from '../pages/Notfound';
import React from 'react';
import Home from '../pages/home';
import Todo from '../pages/todo';
import Project from '../pages/project';
import CreateProject from '../pages/project/create';
import Personal from '../pages/personal';
import HookStudy from '../pages/hookStudy'
import ReduxDemo from '../pages/reduxDemo';
import DashBoard from '../pages/DashBoard'

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
        path: '/dashboard',
        key: '2',
        title: 'DashBoard',
        element: <DashBoard />
      },
      {
        path: '/todo',
        key: '3',
        title: 'ToDo',
        element: <Todo />
      },
      {
        path: '/project',
        key: '4',
        title: 'Project',
        children: [
          {
            path: 'list',
            key: '4-1',
            title: '项目列表',
            element: <Project/>
          },
          {
            path: 'create',
            key: '4-2',
            title: '项目创建',
            element: <CreateProject/>,
          }
        ]
      },
      {
        path: '/personal',
        key: '5',
        title: 'Personal',
        element: <Personal />
      },
      {
        path: '/hookstudy',
        key: '6',
        title: 'Hook',
        element: <HookStudy />
      },
      {
        path: '/redux-demo',
        key: '7',
        title: 'Redux-Demo',
        element: <ReduxDemo />
      }
    ]
  }
];
export { otherRouter, pageRouter };
