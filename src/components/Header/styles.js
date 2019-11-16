import styled from 'styled-components';

export const Container = styled.header`
  height: 50px;
  padding: 0 30px;
  background: #fff;
  color: #58636d;
  border-bottom: 1px solid #b8c3cc;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  list-style: none;

  a {
    font-size: 16px;
    text-decoration: none;
    padding: 15px;
    color: #58636d;
    transition: box-shadow 0.5s ease 0s, text-shadow 0.5s ease 0s;

    &:hover {
      box-shadow: #0675ce 0px -5px 0px 0px inset;
      text-shadow: #58636d 0px 0px 0.1px, #58636d 0px 0px 0.1px;
    }
  }
`;

export const Avatar = styled.div`
  background: url(https://vanhackblobstorageprod.blob.core.windows.net/img/User/139842.jpg)
    no-repeat center;
  background-size: cover;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid #eee;
  transition: border 0.5s ease 0s;

  &:hover {
    border: 3px solid #ccc;
  }
`;

export const UserInfo = styled.a`
  padding-left: 50px;
  display: flex;
  justify-content: center;
`;
