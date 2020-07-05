import styled from 'styled-components';

export const Container = styled.header`
  background: #fff159;
  width: 100vw;

  .content {
    margin-left: 10px;
    margin-right: 10px;
  }
`;


export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;

  border-bottom: 1px solid #c1b74d;

  img {
    height: 34px;
    margin-right: 10px;
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
      /* width: 500px; */

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
`;

export const SecondLine = styled.div`
  display: flex;
  align-items: center;

  height: 39px;

  span {
    font-size: 14px;
    margin-left: 10px;
    margin-right: auto;
  }
`;
