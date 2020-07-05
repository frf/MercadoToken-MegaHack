import styled from 'styled-components';

export const Container = styled.div`
  background: #EEEEEE;
  height: 100vh;

  h1 {
    font-size: 20px;
    margin: 20px 20px 10px;
    font-weight: 400;
    color: #333;
    text-align: center;
  }

  p {
    font-size: 16px;
    margin: 0 20px 70px;
    font-weight: 400;
    color: #333;
    text-align: center;
  }
`;

export const Topo = styled.div`
  display: flex;
  justify-content: center;
  background: #00B1EA;
  padding: 40px 0;

  img {
    width: 120px;
  }
`;

export const Inputs = styled.form`
  display: flex;
  flex-direction: column;

  padding: 10px 20px;

  p {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }

  input {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
      color: #fff;
    }
  }

  button {
    margin: 30px auto 0;
    
    width: 300px;
    height: 51px;
    background: #3483fa;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
`;
