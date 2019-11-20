import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import logo from '../../assets/images/vanhack-logo.svg';

export default function Home() {
  return (
    <Container>
      <Content>
        <h2>Home page</h2>
        <p>
          This is just a sample project, so click in <strong>Events</strong>{' '}
          link above
        </p>

        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </Content>
    </Container>
  );
}
