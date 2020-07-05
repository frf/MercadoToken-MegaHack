import styled from 'styled-components';

export const Container = styled.div`
  background: #EBEBEB;
  padding-bottom: 20px;
`;

export const Hero = styled.div`
  background: #fff;

  img {
    width: 100vw;
  }

  .credit-card {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);

    img {
      width: 48px;
      margin-right: 20px;
    }

    p {
      color: #333;
      font-size: 16px;
    }

    span {
      color: #3483fa;
      font-size: 14px;
    }
  }
`;

export const Cards = styled.div`
  background: #fff;
  margin: 20px 10px;

  border-radius: 6px;

  h2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 18px;
    font-weight: 500;
    padding: 10px 20px;
  }

  button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    border: none;
    border-top: 1px solid #ededed;
    padding: 16px 10px;
    
    span {
      font-size: 14px;
      color: #3483fa;
    }

    svg {
      color: #3483fa;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  padding: 5px 0;

  border-top: 1px solid #ededed;
  
  img {
    width: 102px;
    height: 102px;
    padding-left: 2px;
  }

  .infos {
    padding: 7px 12px 10px 8px;

    h3 {
      font-size: 14px;
      font-weight: 400;
    }

    .price-line {
      margin: 8px 0 4px;

      .price {
        font-size: 20px;
        color: #333;
        margin-right: 8px;
      }

      .percent {
        font-size: 12px;
        color: #00a650;
      }
    }

    .parcelas {
      font-size: 12px;
      color: #00a650;
    }
  }
`;
