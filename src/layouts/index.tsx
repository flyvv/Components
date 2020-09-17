import React from 'react';
import Header from './component/Header/index';
import { Layout } from 'antd';
import LeftMenu from './component/index';

import styles from './index.less';
const { Sider, Content } = Layout;
const BasicLayout: React.FC = props => {
  return (
    <div className={styles.anNuanWrapper}>
      <Layout className={styles.mainContainer}>
        <Header />
        <Layout>
          <Sider className={styles.sider}>
            <LeftMenu />
          </Sider>
          <Content className={styles.content}>{props.children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BasicLayout;
