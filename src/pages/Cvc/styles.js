import styled from 'styled-components';

export const Container = styled.div`
  background: #EEEEEE;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 22px;
    color: #333;
    font-weight: 400;
    text-align: center;
    margin: 70px 0 20px;
  }

  input {
    width: 100px;

    padding: 10px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #3483fa;
  }

  button {
    margin: 70px auto 0;
    
    width: 300px;
    height: 51px;
    background: #3483fa;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
`;

export const Topo = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  background: #00B1EA;
  padding: 40px 0;

  img {
    width: 120px;
  }
`;
