import { Layout, Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { Link, Navigate, Outlet } from "react-router-dom"
import { LayoutData } from "./layoutData"
import React from "react"
import Cookies from "js-cookie"

const { Header, Content } = Layout

const data = LayoutData.map((item)=> {
  return {
    key: `sub${item.id}`,
    icon: React.createElement(item.icon),
    label: (
      <Link style={{fontSize:`16px`, fontWeight: 500}} to={item.path}>
        {item.label}
      </Link>
    )
  }
})

export const MainLayout: React.FC = () => {
  if(!Cookies.get("Token")){
    return <Navigate to="/" replace={true}/>
  } 
  return (
      <Layout style={{ minHeight: '100vh', inset: 0}}>
          <Header style={{ display: 'flex', alignItems: 'center'}}>
            <div className="demo-logo" />
            <Menu theme="dark"  mode="horizontal" defaultSelectedKeys={['2']} items={[{label: 'ADMIN PANEL PROJECT', key: '1'}]} style={{flex: 1, minWidth: 0, fontSize:`18px`, fontWeight: 600}}/>
          </Header>
          <Layout>
            <Sider width={300}>
              <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} items={data}/>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content style={{ padding: '24px', margin: 0, paddingTop: 40 }}>
                <div className="content-wrapper">
                  <Outlet/>
                </div>
              </Content>
            </Layout>
          </Layout>
      </Layout>
  )
}
