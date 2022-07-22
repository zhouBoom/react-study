import React from 'react';
import {
    Button
} from "zent";
import { Layout } from "antd";
import LeftNav from '../components/left-nav';
import Header from '../components/header';
import RouterList from '../router'
import { Outlet } from 'react-router-dom';


const { Footer, Sider, Content } = Layout;

export default function Admin() {
    return (
    <Layout>
        <Sider>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header></Header>
          <Content
          style={{
            backgroundColor: "#fff",
            margin: "12px 0 0 12px",
          }}
          >
          <section>
            <Outlet />
          </section>
          </Content>
          <Footer style={{ textAlign: "center", color: "#cccccc" }}>
            技术出品
          </Footer>
        </Layout>
    </Layout>
    )
}