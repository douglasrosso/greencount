import styled from "styled-components";

export const Tabela = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  height: max-content;
  border-radius: 0 5px 5px 0;

  th {
    border-bottom: 4px solid #000000;
    height: 20px;
    padding: 10px;
  }
  td:last-child {
    display: flex;
    gap: 10px;
  }
  td {
    background-color: rgba(0,212,255,0.2);
    padding: 10px;

    button {
      border: unset;
      border-radius: 5px;
      color: #ffffff;
      font-weight: 600;
      padding: 10px 15px;
      cursor: pointer;
    }

    button:first-child {
      background-color: #1ed514;
      &:hover {
        background-color: #0dff00;
        transform: scale(1.1);
        transition: all 0.3s;
      }
    }

    button:last-child {
      background-color: #e90000;

      &:hover {
        background-color: #fe0000;
        transform: scale(1.1);
        transition: all 0.3s;
      }
    }
  }
  tr:last-child {
    td:last-child {
      border-radius: 0 0 5px 0;
    }
  }
  tr:last-child {
    td:first-child {
      border-radius: 0 0 0 5px;
    }
  }
`;
