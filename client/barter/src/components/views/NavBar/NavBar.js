import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import './Sections/Navbar.css';
import { Nav,Navbar, Button} from 'react-bootstrap'

function NavBar() {
  // const [visible, setVisible] = useState(false)

  // const showDrawer = () => {
  //   setVisible(true)
  // };

  // const onClose = () => {
  //   setVisible(false)
  // };

  return (
    <>
    <div className="Container">
      <Navbar  collapseOnSelect sticky='top' expand='lg'className="navbar-top">
        <Navbar.Brand href="/home-page">BARTER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-item ml-auto">
            <RightMenu/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    
    </>
  )
}

export default NavBar