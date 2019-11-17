import React from 'react';

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

export default function Hero() {
  return (
    <Container>
      <Image alt="Hero" />
      <Info>
        <Flag name="canada" />
        <InfoContent>
          <Title>Relocation Summit 2019</Title>
          <div>
            <TextContent>
              <span>Vancouver - Canada</span>
              <span>November 27 - December 4, 2019</span>
              <span>
                Deadline: <span>11/26/2019</span>
              </span>
            </TextContent>
            <Button>See Application</Button>
          </div>
        </InfoContent>
      </Info>
    </Container>
  );
}
