import React, { useState, useEffect } from 'react';
import { Container, EventList } from './styles';

import Hero from '../../components/Hero';
import EventItem from '../../components/EventItem';

import api from '../../services/api';

export default function Events() {
  const [events, setEvents] = useState([]);

  async function fetchData() {
    const response = await api.get('events');
    setEvents(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Hero />
      <EventList>
        {events.map(event => (
          <EventItem key={event.id} data={event} />
        ))}
      </EventList>
    </Container>
  );
}
