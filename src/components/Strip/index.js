import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Carousel } from './styles';

import EventItem from '../EventItem';

export default function Strip({ title, list }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Carousel size={list.length}>
        {list.map(event => (
          <EventItem key={event.id} data={event} />
        ))}
      </Carousel>
    </Container>
  );
}

Strip.defaultProps = {
  title: 'Strip title',
  list: [],
};

Strip.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};
