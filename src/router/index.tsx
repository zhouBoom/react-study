import React from 'react';
import { HashRouter, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { otherRouter, pageRouter } from './routerList';

const allRouter = [...pageRouter, ...otherRouter];

export default function index() {
  // 提前封装好的路由配置函数
  const renderRouter = (router: any[]) =>
    router.map((item, index) =>
      item.path ? (
        <Route
          key={index}
          path={item.path}
          element={item.element}
          {...(item.props = {})}
        >
          {item.children && renderRouter(item.children)}
        </Route>
      ) : (
        <Route
          key={index}
          path={item.from}
          element={<Navigate to={item.to} replace />}
        />
      )
    );

  return (
    <BrowserRouter>
      <Routes>{renderRouter(allRouter)}</Routes>
    </BrowserRouter>
  );
}

