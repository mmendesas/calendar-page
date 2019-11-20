import styled from 'styled-components';

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

export const GridList = styled.ul`
  margin: 30px 0px;
  width: 1280px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const Options = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: flex-end;

  > h3 {
    color: #aaa;
    margin-right: 3px;
  }
`;

export const Option = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 2px;
  margin: 15px 5px;
  border-radius: 4px;
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
  transition: all 0.2s ease-in-out;

  > img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    box-shadow: 0 2px 8px 2px rgba(20, 23, 28, 0.15);
    transform: scale(1.1);
  }
`;
