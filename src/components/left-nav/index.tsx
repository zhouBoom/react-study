import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.less'
import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import {pageRouter} from "../../router/routerList";


const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu

function genMenu(menuConfig, oldMenuPath = undefined) {
  console.log(menuConfig)
  return menuConfig.map(menuItem => {
    if (menuItem.children) {
      return (
      <SubMenu
        key={menuItem.key}
        icon={<NotificationOutlined/>}
        title={menuItem.title}
      >
        {genMenu(menuItem.children, menuItem.path)}
      </SubMenu>
      )} else {
      return <Menu.Item key={menuItem.key} icon={<VideoCameraOutlined/>} path={oldMenuPath ? `${oldMenuPath}/${menuItem.path}` : menuItem.path}>{menuItem.title}</Menu.Item>
    }
  })
}

const LeftNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  // 菜单伸缩打开
  const toggle = function() {
    setCollapsed(!collapsed);
  }
  // 跳转函数
  const navigate = useNavigate()
  const handleSelect = ({item, key, keyPath, selectedKeys, domEvent}) => {
    let {path} = item.props
    console.log(path)
    navigate(path)
  };
    return (
    <div>
      <Layout style={{height: '100vh'}}>
        <Sider trigger={null} collapsible>
          {/* <div className="logo" />
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
          </Menu> */}
          <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              onSelect={handleSelect}
              style={{height: "100%", borderRight: 0}}
            >
              {genMenu(pageRouter[1].children)}
            </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
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
