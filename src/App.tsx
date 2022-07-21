import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import RouterConfig from './router'

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Link to="/login">Login页面</Link>
          <Link to="/admin">Admin页面</Link>
        </div>
        {/* 展示对应路由页面 */}
        {<RouterConfig/>}
      </HashRouter>
    </div>
  );
}

export default App;
