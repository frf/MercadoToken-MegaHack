import styled from 'styled-components';

export const Container = styled.div`
  background: #EEEEEE;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin: 30px 0 10px;
    padding: 3px 2px 1px;
    color: #fff;
    background: #00B1EA;
    border-radius: 50%;
  }

  p {
    font-size: 22px;
    color: #333;
    font-weight: 400;
    text-align: center;
    
  }

  span {
    font-size: 22px;
    color: #333;
    font-weight: 700;
    text-align: center;
    margin: 50px 0 10px;

    &.token {
      margin: 0;
    }
  }

  img {
    margin: 30px 0 40px;
    width: 100px;
  }
`;

export const Topo = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  background: #00B1EA;
  padding: 30px 0;

  img {
    width: 120px;
  }
`;
