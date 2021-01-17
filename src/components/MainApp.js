import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from './Header';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

const { Content } = Layout;

function MainApp(props) {

  return (
    <Layout >
      <Sidebar routs={props} />
      <Layout className="site-layout">
        <AppHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            minHeight: 280,
          }}
        >
          {
            props.children
          }
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(MainApp)
