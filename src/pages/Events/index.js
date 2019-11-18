import React, { useState, useEffect } from 'react';
import { Container, GridList, Content, Carousel, Strip, Title } from './styles';

import Hero from '../../components/Hero';
import EventItem from '../../components/EventItem';

import api from '../../services/api';

export default function Events() {
  const [missions, setMissions] = useState([]);
  const [leaps, setLeaps] = useState([]);
  const [hackatons, setHackatons] = useState([]);

  async function fetchData() {
    const response = await api.get('events');
    const { data } = response;

    setMissions(data.filter(item => item.type === 'mission'));
    setLeaps(data.filter(item => item.type === 'leap'));
    setHackatons(data.filter(item => item.type === 'hackaton'));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Hero />
      <Content>
        {/* <GridList>
          {events.map(event => (
            <EventItem key={event.id} data={event} />
          ))}
        </GridList> */}

        <Strip>
          <Title>Leaps</Title>
          <Carousel>
            {leaps.map(event => (
              <EventItem key={event.id} data={event} />
            ))}
          </Carousel>
        </Strip>

        <Strip>
          <Title>VanHackatons</Title>
          <Carousel>
            {hackatons.map(event => (
              <EventItem key={event.id} data={event} />
            ))}
          </Carousel>
        </Strip>

        <Strip>
          <Title>Missions</Title>
          <Carousel>
            {missions.map(event => (
              <EventItem key={event.id} data={event} />
            ))}
          </Carousel>
        </Strip>
      </Content>
    </Container>
  );
}
