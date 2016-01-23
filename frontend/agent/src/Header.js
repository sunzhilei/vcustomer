/**
 * Created by sunzhilei on 2016/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';

import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

class HeaderComponent extends React.Component {
    render() {
        return (
            <Navbar inverse>
                <NavbarBrand>优客网</NavbarBrand>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/">首页</NavItem>
                    <NavItem eventKey={2} href="/">经典案例</NavItem>
                    <NavItem eventKey={3} href="/">产品中心</NavItem>
                    <NavItem eventKey={4} href="/">关于优客网</NavItem>
                    <NavDropdown eventKey={5} title="帮助中心" id="collapsible-navbar-dropdown">
                        <MenuItem eventKey={5.1} href="/">使用指南</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={5.2} href="/">产品问答</MenuItem>
                        <MenuItem eventKey={5.3} href="/">在线咨询</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={6} href="/SysEntry">管理中心</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

module.exports = HeaderComponent;