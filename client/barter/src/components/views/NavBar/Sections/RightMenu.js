/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Navbar, Nav, Button } from 'react-bootstrap';

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`api.barterit.tk/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
        <Nav>
        <Button className="nav-button mx-2" variants="custom" href="/register">Register</Button>
        <Button className="nav-button" variant="custom" href="/login">Log-in</Button>
        </Nav>

    )
  } else {
    return (
      <Nav mode={props.mode}>
          <Nav.Link className="nav-link-connection" href="/user/connection">Connections</Nav.Link> 
          <Nav.Link className="nav-link-about " href="/about-us">About Us</Nav.Link>
          <Nav.Link className="nav-link-upload " href="/product/upload">Upload </Nav.Link>
          <Button className="nav-button" onClick={logoutHandler}>Logout</Button>
      </Nav>
    )
  }
}

export default withRouter(RightMenu);

