import React from 'react';
import { Container, EventList } from './styles';

import Hero from '../../components/Hero';
import EventItem from '../../components/EventItem';

export default function Events() {
  return (
    <Container>
      <Hero />
      <EventList>
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
      </EventList>
    </Container>
  );
}
