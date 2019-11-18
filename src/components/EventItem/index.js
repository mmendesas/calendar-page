import React from 'react';
import PropTypes from 'prop-types';
import IconLocation from '../../assets/images/icon-location.png';

import {
  Container,
  Content,
  Flag,
  Title,
  DeadlineInfo,
  Location,
  Button,
} from './styles';

export default function EventItem({ data }) {
  const { image, title, datetime, location, deadline } = data;

  return (
    <Container>
      <img src={image} alt="event" />
      <Flag name={location.country.toLowerCase()} />
      <Content>
        <Title>{title}</Title>
        <div>{datetime}</div>
        <Location>
          <img src={IconLocation} alt="icon-location" />
          <div>
            {location.city} - {location.country}
          </div>
        </Location>
        <DeadlineInfo>
          <strong>Deadline:</strong>
          <span>{deadline}</span>
        </DeadlineInfo>
        <Button>See Details</Button>
      </Content>
    </Container>
  );
}

EventItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    datetime: PropTypes.string,
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }),
    deadline: PropTypes.string,
  }).isRequired,
};
