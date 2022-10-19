import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import { Link } from 'react-router-dom'

function LayoutHeader() {
    return (

<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        > 
        <Menu.Item key={1}><Link to='/login'>Login</Link></Menu.Item>     
           
           </Menu>
    </Header>
   
    )
}

export default LayoutHeader
// <Menu.Item key={4}><Link to='/updateCustomer'>UpdateCustomers</Link></Menu.Item>
 /*
  <Menu.Item key={2}><Link to='/customers'>Customers</Link></Menu.Item>
          <Menu.Item key={3}><Link to='/addCustomer'>AddCustomers</Link></Menu.Item>
 */