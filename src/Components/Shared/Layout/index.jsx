import  { useState } from 'react';
import {
  BarChartOutlined,
  BellOutlined,
  DashboardFilled,
  LogoutOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UploadOutlined,
  UserOutlined, 
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const LayoutEl = (data) => {
  const menuItems=[
    { 
      className:"font-semibold",
      key:"1",
      icon:<DashboardFilled />,
      label:"Dashboard"
    },
    {
      key: '2',
      icon: <BarChartOutlined/>,
      label: 'Analytics',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'Settings',
    },
  ]
  const items=[
    {
      key:"1",
      label:(<Link to="#" className='flex gap-x-2 justify-start items-center'><UserOutlined/>Profile</Link>)
    },
    {
      key:"2",
      label:(<Link to="#" className='flex gap-x-2 justify-start items-center'><SettingOutlined/>Settings</Link>)
    },
    {
      key:"3",
      label:(<Link to="#" className='flex gap-x-2 justify-start items-center'><LogoutOutlined/>Logout</Link>)
    }
  ]
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical text-center" >
           {
            !collapsed ? <h1 className='font-bold text-zinc-400 text-xl'>E-Commerce</h1> :<h1 className='font-bold text-zinc-400 text-xl'>E-C</h1>
           }
        </div>
        <Menu
          className=''
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          className='flex justify-between'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='flex gap-x-2 justify-center items-center px-3'>
            <Button icon={<MailOutlined/>} type='text' className='bg-green-100 text-green-600' shape='circle'  />
            <Button icon={<BellOutlined/>} type='text' className='bg-rose-100 text-rose-600' shape='circle'  />
            <Dropdown menu={{items}} arrow="true">
              <Avatar className='bg-gray-500 text-white font-bold'>A</Avatar>
              
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {data.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutEl;