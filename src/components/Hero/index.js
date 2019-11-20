import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Image,
  Info,
  Flag,
  InfoContent,
  Title,
  TextContent,
  Button,
} from './styles';

export default function Hero({ data }) {
  const { image, title, datetime, deadline } = data;
  return (
    <Container data-testid="hero">
      <Image alt="Hero" url={image} />
      <Info>
        <Flag name="canada" />
        <InfoContent>
          <Title>{title}</Title>
          <div>
            <TextContent>
              <span>Vancouver - Canada</span>
              <span>{datetime}</span>
              <span>
                Deadline: <span>{deadline}</span>
              </span>
            </TextContent>
            <Button>See Application</Button>
          </div>
        </InfoContent>
      </Info>
    </Container>
  );
}

Hero.propTypes = {
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
