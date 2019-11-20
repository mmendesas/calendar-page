import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  margin: 30px 0;
  padding: 20px;
  border-radius: 20px;
  background: rgba(236, 241, 248, 0.3);
`;

export const Title = styled.h2``;

export const Carousel = styled(Slider).attrs(props => ({
  infinite: props.size && props.size > 3,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
}))`
  margin-top: 15px;
  height: 100%;

  > div > div {
    height: 350px;
  }

  > button {
    background: #ddd;
    border-radius: 50%;
    &:hover {
      background: #ccc;
    }
  }
`;
