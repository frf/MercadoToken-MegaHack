import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0,0,0,0.03);
  height: 100vh;

  h3 {
    margin: 0 32px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }
`;

export const Topo = styled.div`
  background: #ffea78;
  padding: 15px;

  h2 {
    font-size: 22px;
    color: #333;
    font-weight: 400;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Endereço = styled.div`
  margin: 14px;
  background: #eee;
  border-radius: 6px;
  padding: 16px;

  .title {
    display: block;
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }

  p {
    margin: 12px 0;
    font-size: 13px;
    color: rgba(0,0,0,0.8);
  }

  .editar {
    font-size: 13px;
    color: #3483FA;
  }
`;

export const Opção = styled.div`
  margin: 14px;
  background: #fff;
  border-radius: 6px;
  padding: 20px 16px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.15);

  display: flex;
  justify-content: space-between;

  .normal {
    span {
      display: block;
      font-size: 18px;
      color: #333;
      margin-bottom: 8px;
    }

    p {
      color: #999;
      font-size: 13px;
    }
  }

  .link {
    display: flex;
    align-items: center;

    span {
      font-size: 18px;
      color: #39b54a;
    }

    svg {
      color: #39b54a;
      margin-left: 6px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  background: #fff;
  box-shadow: 0 -2px 8px 2px rgba(0,0,0,.15);

  position: fixed;
  bottom: 0;
  width: 100%;

  span {
    font-size: 16px;
    color: #666;

    &.price {
      font-size: 22px;
      color: #333;
    }
  }
`;
