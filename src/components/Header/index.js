import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu, UserInfo, Avatar } from './styles';

import logo from '../../assets/images/vanhack-logo.svg';

export default function index() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Menu>
        <Link to="/jobs">Jobs</Link>
        <Link to="/events">Events</Link>
      </Menu>
      <UserInfo href="https://github.com/mmendesas">
        <Avatar />
      </UserInfo>
    </Container>
  );
}
