import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Button } from './styles';

export default function Modal({ handleClose, show, children, buttonText }) {
  return (
    <Container show={show}>
      <Content>
        <section>{children}</section>
        <Button onClick={handleClose}>{buttonText}</Button>
      </Content>
    </Container>
  );
}

Modal.defaultProps = {
  show: false,
  buttonText: 'close',
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string,
};
