import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.section`
  width: 1280px;
`;

export const Strip = styled.section`
  margin: 30px 0;
  padding: 20px;
  border-radius: 20px;
  background: rgba(236, 241, 248, 0.3);
`;

export const Title = styled.h2``;

export const GridList = styled.ul`
  margin: 30px 0px;
  width: 1280px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const Carousel = styled(Slider).attrs(props => ({
  infinite: props.size && props.size > 3,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
}))`
  margin-top: 15px;
  height: 100%;

  > div > div {
    height: 350px;
  }
`;
