import React from 'react';
import Header from './component/Header/index';
import { Layout } from 'antd';
import LeftMenu from './component/index';

import './index.less';
const { Sider, Content } = Layout;
const BasicLayout: React.FC = props => {
  return (
    <div className="home-wrapper">
      <Layout className="mainContainer">
        <Header />
        <Layout>
          <Sider className="sider">
            <LeftMenu />
          </Sider>
          <Content className="content">{props.children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BasicLayout;
