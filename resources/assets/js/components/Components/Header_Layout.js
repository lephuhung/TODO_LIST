import React from 'react';
import { Layout, Icon,Menu } from 'antd';
const { Header } = Layout;
const SubMenu=Menu.SubMenu;
class Header_Layout extends React.Component {
  render() {
    return (
      <Header style={{ background: '#ffa', padding: 0 }}>
         <div style={{ float: "right",display:'inline', paddingRight: 10 }}>
          <span style={{ paddingRight: 5 }}>LÊ PHÚ HƯNG</span>
          <Icon type='user' /> 
          {/* <Menu mode='inline'>
          <SubMenu
            key="sub1"
            title={ <Icon type='user' />}
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          </Menu> */}
         </div> 
      </Header>
    );
  }
}
export default Header_Layout;