
import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Button, Layout } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  MailOutlined,
  UsergroupDeleteOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      selectedPage: "1"
    };

  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  changeActivePage = (e) => {
    this.setState({
      selectedPage: e
    })
  }

  render() {
    const { selectedPage } = this.state;
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          className={this.state.collapsed ? "ant-menu ant-menu-dark ant-menu-inline-collapsed ant-menu-root ant-menu-vertical" : ""}
          defaultSelectedKeys={[selectedPage ]}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >

          <Menu.Item key="/" icon={<UsergroupDeleteOutlined />} onClick={() => { this.changeActivePage("/") }}>
            <Link to='/'> Users</Link>
          </Menu.Item>

          <Menu.Item key="/dashboard" icon={<PieChartOutlined />} onClick={() => { this.changeActivePage("/dashboard") }}>
            <Link to='/dashboard'> Dashboard </Link>
          </Menu.Item>

          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar
