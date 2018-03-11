import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import './Navigation.css';


const Navigation = (props) => {
    return (
        <Navbar style={{ background: 'darkslateblue' }}>
            <Navbar.Header>
                <Navbar.Brand className="Brand">
                    <p style={{color: 'white', fontSize: '2.5rem'}}>Wellcome to ReactCrypto</p>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem>
                    <Button bsSize="large" onClick={()=>props.history.push('/')}>Home</Button>
                </NavItem>
                <NavItem>
                    <Button bsSize="large" onClick={()=>props.history.push('/settings')}>Settings</Button>
                </NavItem>
            </Nav>
        </Navbar>);
}

export default Navigation; 