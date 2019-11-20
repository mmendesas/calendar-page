import React, { useState, useEffect } from 'react';
import { Container, GridList, Content, Options, Option } from './styles';

import GridIcon from '../../assets/images/grid.svg';
import ListIcon from '../../assets/images/list.svg';

import Hero from '../../components/Hero';
import EventItem from '../../components/EventItem';
import Strip from '../../components/Strip';

import api from '../../services/api';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [missions, setMissions] = useState([]);
  const [leaps, setLeaps] = useState([]);
  const [hackatons, setHackatons] = useState([]);
  const [option, setOption] = useState('list');
  const [hero, setHero] = useState({});

  async function fetchData() {
    const response = await api.get('events');
    const { data } = response;

    setEvents(data);
    setMissions(data.filter(item => item.type === 'mission'));
    setLeaps(data.filter(item => item.type === 'leap'));
    setHackatons(data.filter(item => item.type === 'hackaton'));
  }

  async function fecthHero() {
    const response = await api.get('main');
    setHero(response.data);
  }

  // fetch data on mount component
  useEffect(() => {
    fetchData();
    fecthHero();
  }, []);

  return (
    <Container>
      <Hero data={hero} />
      <Options>
        <h3>Define your view mode:</h3>
        <Option name="list" title="list view" onClick={() => setOption('list')}>
          <img src={GridIcon} alt="grid-view" />
        </Option>
        <Option name="grid" title="grid-view" onClick={() => setOption('grid')}>
          <img src={ListIcon} alt="list-view" />
        </Option>
      </Options>
      <Content>
        {option === 'list' ? (
          <GridList>
            {events.map(event => (
              <EventItem key={event.id} data={event} />
            ))}
          </GridList>
        ) : (
          // use react-slick to show carousel
          <>
            <Strip title="Leaps" list={leaps} />
            <Strip title="Vanhackatons" list={hackatons} />
            <Strip title="Missions" list={missions} />
          </>
        )}
      </Content>
    </Container>
  );
}
