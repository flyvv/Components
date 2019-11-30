import { Menu, Icon } from 'antd';
import  Link from 'umi/link';
import React, { Fragment } from 'react';

const { SubMenu } = Menu;

interface IProps {

}

class IState {
    openKeys: any[] = ['sub1'];
}

export default class LeftMenu extends React.Component<IProps, IState> {
    public state = new IState();
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    onOpenChange = (openKeys: any) => {
        const latestOpenKey = openKeys.find((key: any) => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Fragment>
                <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                >
                    <SubMenu
                        key="sub1"
                        // onTitleClick={}
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>组件库啊</span>
                            </span>
                        }
                    >
                        <Menu.Item key="1">
                            <Link to={'/home/components'}>去撒常年举办世界</Link>
                        </Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>学习学习</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span> 未完待续</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Fragment>
        );
    }
}