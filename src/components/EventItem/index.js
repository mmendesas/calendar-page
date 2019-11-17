import React from 'react';
import IconLocation from '../../assets/images/icon-location.png';

import {
  Container,
  Content,
  Title,
  DeadlineInfo,
  Location,
  Button,
} from './styles';

export default function EventItem() {
  return (
    <Container>
      <img
        src="https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/37478757-eef9-4cf1-b0c2-9ceb426cffaa.jpg"
        alt="event"
      />
      <Content>
        <Title>VanHackaton</Title>
        <div>November 15 - 22, 2019</div>
        <Location>
          <img src={IconLocation} alt="icon-location" />
          <div>Vancouver - Canada</div>
        </Location>
        <DeadlineInfo>
          <strong>Deadline:</strong>11/03/2019
        </DeadlineInfo>
        <Button>See Details</Button>
      </Content>
    </Container>
  );
}
