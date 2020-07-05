import styled from 'styled-components';

export const Container = styled.div`
  background: #ededed;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;

  h1 {
    font-size: 22px;
    font-weight: 500;
    color: #222;
    margin-bottom: 20px;
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  padding: 20px 0;
  border-radius: 5px;
  border-top: 3px solid #2b81f9;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.15);

  margin-bottom: 40px;

  div {
    width: 25%;
    padding-left: 40px;

    span {
      font-weight: 700;
      color: #2b81f9;
    }

    p {
      font-size: 14px;
    }

    & + div {
      border-left: 1px solid #ededed;
    }
  }
`;

export const Venda = styled.div`
  background: #fff;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.15);
`;

export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;

  border-bottom: 1px solid #ededed;

  .status {
    p {
      font-size: 16px;
      font-weight: 700;
      color: red;
    }

    span {
      font-size: 13px;
    }
  }

  .print {
    width: 260px;
    height: 48px;

    background: #3483fa;
    border: 1px solid #3483fa;
    border-radius: 5px;
    color: #fff;
    font-weight: 500;
  }

  .user {
    display: flex;
    align-items: center;

    img {
      width: 48px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .username-area {
      display: flex;
      align-items: center;
      position: relative;

      button {
        background: transparent;
        border: none;
      }
    }

    .username {
      font-size: 16px;
      font-weight: 500;
      margin-right: 6px;
    }

    .mensagem {
      display: none;

      position: absolute;
      bottom: 20px;
      width: 135px;

      margin-left: 6px;
      font-size: 12px;
      padding: 3px 6px;
      border-radius: 2px;
      background: #3cb49d;
      color: #fff;

      &.active {
        display: block;
      }
    }

    .contact {
      font-size: 13px;
      color: #2b81f9;
    }
  }
`;

export const SecondLine = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;

  .produto {
    display: flex;
    align-items: center;
    margin-right: 100px;

    img {
      width: 60px;
      margin-right: 20px;
    }

    span {
      font-size: 14px;
      font-weight: 700;
    }
  }

  .price {
    margin-right: 100px;
    font-size: 14px;
    color: #999;
  }

  .unidade {
    margin-right: 100px;
    font-size: 14px;
    color: #999;
  }
`;
