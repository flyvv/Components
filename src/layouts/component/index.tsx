import { Menu } from 'antd';
import {Link} from 'umi';
import React, { Fragment } from 'react';

const LeftMenu: React.FC<any> = props => {
  const pathname = window.location.pathname;
  const menuData = [
    { route: '/list', name: 'ToDoList' },
    { route: '/imageList', name: 'ImageList' },
    { route: '/tagList', name: 'TagList' },
    { route: '/expandTable', name: 'ExpandTable' },
    { route: '/ellipis', name: 'Ellipis' },
    { route: '/study', name: 'Study' },
  ];
  return (
    <Fragment>
      <Menu mode="inline" defaultSelectedKeys={[pathname]}>
        {menuData.map(menu => (
          <Menu.Item key={`/${menu.route}`}>
            <Link to={menu.route}>{menu.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Fragment>
  );
};

export default LeftMenu;
