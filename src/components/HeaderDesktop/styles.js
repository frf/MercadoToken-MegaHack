import styled from 'styled-components';

export const Container = styled.header`
  background: #fff159;
  width: 100vw;

  .content {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;


export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;

  border-bottom: 1px solid #c1b74d;

  .searchLogo {
    display: flex;
    align-items: center;
  }

  img {
    height: 34px;
    margin-right: 40px;
  }

  .search {
    display: flex;
    align-items: center;
    background: #fff;

    height: 39px;

    input {
      border: none;
      padding: 10px 0;
      font-size: 14px;
      width: 500px;
      padding: 0 10px;

      &::placeholder {
        color: #e6e6e6;
      }
    }

    button {
      padding: 0 10px;
      background: #fff;
      border: 0;

      svg {
        color: #e6e6e6;
      }
    }
  }

  .frete {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 39px;

  .locationCategories {
    display: flex;
    align-items: center;

    span {
      font-size: 12px;
      margin-left: 2px;
      margin-right: 10px;
    }

    img {
      height: 37px;
    }
  }

  .secondBlock {
    display: flex;
    align-items: center;

    .user {
      display: flex;
      align-items: center;
      margin-right: 20px;

      svg {
        margin-right: 5px;
      }
    }

    .compras {
      margin-right: 20px;
    }

    .favoritos {
      margin-right: 20px;
    }

    .bell {
      margin-right: 20px;
    }
  }
`;
