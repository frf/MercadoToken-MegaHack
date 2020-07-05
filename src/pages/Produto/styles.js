import styled from 'styled-components';

export const Container = styled.div`
  img {
    margin-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    border-bottom: 1px solid #ededed;
  }
`;

export const Infos = styled.div`
  padding: 30px 30px 20px;

  span {
    font-size: 14px;
    color: #666;
  }

  h1 {
    margin-top: 8px;
    font-size: 26px;
    color: #333;
    font-weight: 500;
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;

    > blue {
      color: #3483FA;
    }
  }

  .tag {
    padding: 6px 10px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    border-radius: 5px;
    background: #3483FA;
  }
`;

export const Price = styled.div`
  padding: 10px 30px 20px;

  .de {
    font-size: 16px;
    color: #999;
    text-decoration: line-through;
  }

  .price-block {
    display: flex;
    align-items: center;

    .price {
      font-size: 44px;
      color: #333;
      margin-right: 10px;
    }

    .off {
      font-size: 22px;
      color: #00A650;
    }
  }

  .parcelas {
    font-size: 14px;
    color: #333;

    > green {
      color: #00A650;
    }
  }

  .pagamentos {
    margin-top: 6px;
    display: block;
    font-size: 14px;
    color: #3483FA;
  }

  .estoque {
    margin-top: 4px;

    display: block;
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const Buy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 300px;
    height: 51px;

    background: #fff;
    border: 1px solid #3483fa;
    border-radius: 5px;
    color: #3483fa;
    font-weight: 500;

    &.buy {
      margin-bottom: 10px;
      background: #3483fa;
      color: #fff;
    }
  }
`;