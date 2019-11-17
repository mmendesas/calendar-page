import styled from 'styled-components';

export const Container = styled.li`
  background-color: rgb(255, 255, 255);
  width: 300px;
  min-height: 324px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  > img {
    background-size: cover;
    height: 150px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  line-height: 1.5;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 5px;
  line-height: 1.6;
`;

export const DeadlineInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > span {
    padding-left: 5px;
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`;

export const Button = styled.button`
  background-color: #3c74cf;
  color: white;
  padding: 8px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  font-weight: bold;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  /* text-transform: uppercase; */
  width: 110px;
  align-self: flex-end;

  &:hover {
    background-color: rgb(42, 81, 144);
  }
`;

export const Flag = styled.div`
  background: url(https://vanhackblobstorageprod.blob.core.windows.net/flags/${props => props.name || 'brazil'}.svg)
    no-repeat center;
  width: 30px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: 135px;
  right: 10px;
  z-index: 1;
`;
