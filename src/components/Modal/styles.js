import styled from 'styled-components';

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  display: ${props => (props.show ? 'block' : 'none')};
`;

export const Content = styled.section`
  position: fixed;
  background: white;
  width: 300px;
  height: auto;
  min-height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 15px;
  background-color: #3c74cf;
  color: white;
  padding: 8px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  font-weight: bold;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  width: 110px;

  &:hover {
    background-color: rgb(42, 81, 144);
  }
`;
