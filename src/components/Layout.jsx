import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  BgColorsOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Input } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  marginTop: '63px',
  background: 'white'
};
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label:`Menu`,
}));


const MyLayout = ({ children }) => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (

    <Layout hasSider>

      <Sider style={siderStyle} >
        <div className="demo-logo-vertical mt-5" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            width:'100%',
            position: 'fixed',
            zIndex: '2',
            color: '#344CB7',
            fontFamily: 'Verdana',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderBottom: '1px solid gray'
          }}

        >
          <h4> SpeakUp  </h4>

          <Input prefix={<SearchOutlined />} type="search" placeholder="Search" className='search'/>


          <button type="button" className="button ms-5">
            <span className="button__text">Add Post</span>
            <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
          </button>


        </Header>
        <Content
          style={{
            margin: '10px 16px 0',
            overflow: 'initial',
            // marginTop: '82px',
            marginLeft: '90px',
            
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: '#EBF1EB',
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
            {/* {
              indicates very long content
              Array.from(
                {
                  length: 100,
                },
                (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ),
              )
            } */}
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default MyLayout;