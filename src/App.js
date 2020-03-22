import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Router from './routes/router'
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
      <StyledSider>
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
              <HomeOutlined />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/about'>
              <UserOutlined />
              <span>About Me</span>
            </Link>
          </Menu.Item>
        </Menu>
      </StyledSider>
      <Layout style={{marginLeft: 200}}>
        <StyledHeader>Welcome To My Home</StyledHeader>
        <StyledContent>
          <Router />
        </StyledContent>
        <Footer style={{ textAlign: 'center' }}>My Home ©2020 Created by Electric burglar</Footer>
      </Layout>
    </Layout>
  );
}

const StyledSider = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  background: white;
  left: 0;
`
const StyledHeader = styled(Header)`
  padding: 0;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  -webkit-box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
  -moz-box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
  box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
  background: #F0F3F4
`

const StyledContent = styled(Content)`
  height: 100vh;
  padding: 10px;
  overflow: initial;
  color: black;
`
export default App;