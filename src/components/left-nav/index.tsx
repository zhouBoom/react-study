import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import RouterConfig from '../../router'
import './index.less'
import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu

const LeftNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = function() {
    setCollapsed(!collapsed);
  }
    return (
    <div>
      <Layout style={{height: '100vh'}}>
        <Sider trigger={null} collapsible>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <MenuFoldOutlined/>
                <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <MenuUnfoldOutlined/>
                <Link to="/page">测试</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined/>
              <Link to="/home/class">测试</Link>
            </Menu.Item>
            <SubMenu title="文件介绍" icon={<VideoCameraOutlined/>}>
                <Menu.Item>
                  <UserOutlined/>
                  <Link to="/home/lesson">测试</Link>
                </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            {/* <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            /> */}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {/* {<RouterConfig/>} */}
          </Content>
        </Layout>
      </Layout>
      </div>
    );
}

export default LeftNav;
