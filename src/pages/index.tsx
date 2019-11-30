import React from 'react';
import styles from './index.css';
import List from './home/List'
import Head from '../component/Header'
import Ellipis from './../component/Ellipis/index';
import { Layout } from 'antd';
import LeftMenu from '../layouts/component/menu'
const { Header, Footer, Sider, Content } = Layout;
import { Menu, Icon } from 'antd';
import { Route } from 'react-router';

const { SubMenu } = Menu;
export default function (props: any) {

  return (
    // <div>
    //   <Header/>
    //   {/* <List />  */}
    //   {/* <Ellipis value={657843853} maxWidth={20}/> */}
    // </div>
    <Layout  className = {styles.mainContainer}>
      <Head></Head>
      <Layout>
        <Sider className = {styles.sider}>
          <LeftMenu></LeftMenu>
        </Sider>
        <Content className = {styles.content}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
