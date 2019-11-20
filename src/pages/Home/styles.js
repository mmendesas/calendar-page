import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 30px;
  background-color: rgb(255, 255, 255);
  width: 1280px;
  min-height: 324px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 12px 0px !important;
  border-radius: 4px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > p {
    margin-top: 15px;
  }

  > a {
    margin-top: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
