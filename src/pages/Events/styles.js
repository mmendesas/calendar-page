import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const EventList = styled.ul`
  margin: 30px;
  width: 1280px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  li {
    display: flex;
    flex-direction: column;
  }
`;
