import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 12px 0px !important;
  border-radius: 4px;
`;

export const Image = styled.div`
  background: url(https://vanhackblobstorageprod.blob.core.windows.net/img/events/cover/relocation-summit-2019.png)
    no-repeat center;
  background-size: cover;
  width: 100%;
  height: 320px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;

  align-items: center;
`;

export const Flag = styled.div`
  background: url(https://vanhackblobstorageprod.blob.core.windows.net/flags/${props => props.name || 'brazil'}.svg)
    no-repeat center;
  background-size: cover;
  width: 50px;
  height: 50px;
  margin: 0px 20px;
  border-radius: 50%;
`;

export const InfoContent = styled.div`
  padding: 15px;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  padding-bottom: 10px;
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  span {
    &:nth-child(2) {
      font-weight: bold;
    }

    & + span {
      margin-left: 30px;
    }

    span {
      font-weight: bold;
    }
  }
`;

export const Button = styled.button`
  color: #3c74cf;
  border: 1px solid rgba(60, 116, 207, 0.5);
  padding: 8px 24px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 4px;
  line-height: 1.75;
  background-color: transparent;

  &:hover {
    border-color: #3c74cf;
    background-color: rgba(60, 116, 207, 0.08);
  }
`;
