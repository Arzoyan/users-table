import React from 'react';
import { Badge, Layout, Avatar } from 'antd';
import { connect } from 'react-redux';
import { UserOutlined, SearchOutlined, BellFilled } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = (props) => {
  return (
    <Header className="site-layout-background app-header" style={{ padding: 0 }}
    >
      <div className='notification-bur'>
        <SearchOutlined style={{ fontSize:"18px" }} />
        <Badge count={4} style={{backgroundColor:"blue"}} >
          <span className="head-example" />
          <BellFilled style={{width:"25px", fontSize:"18px" }}/>
        </Badge>
      </div>
      <div className='avatar'>
        <Badge dot className="user-status" color='green'>
          <Avatar size="large" icon={<UserOutlined />} />
        </ Badge>
      </div>
    </Header>
  );
}


const mapStateToProps = state => {
  return {
    home: state.home
  };
};

export default connect(mapStateToProps)(AppHeader)