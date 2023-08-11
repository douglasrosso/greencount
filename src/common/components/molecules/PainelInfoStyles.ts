import styled from "styled-components";

export const PainelInfo = styled.article`
  h1 {
    letter-spacing: 1.5px;
    font-size: 30px;
    text-align: center;
  }

  section {
    margin-top: 40px;
    display: flex;
    gap: 5%;
    width: 100%;

    button:nth-child(2) svg {
      fill: red;
    }

    button {
      width: 30%;
      height: 110px;
      padding: 20px;
      border: 1px solid #c4c4c4c4;
      border-radius: 5px;
      background-color: unset;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
        rgba(0, 0, 0, 0.05) 0px 5px 10px;
      cursor: pointer;

      span {
        font-weight: 600;
        opacity: 0.8;
        letter-spacing: 1.2px;
        left: 20px;
        top: 20px;
        position: absolute;
      }

      h2 {
        font-size: 30px;
        position: relative;
        bottom: -15px;
      }

      svg {
        position: absolute;
        right: 20px;
        top: 20px;
        fill: green;
      }
    }
  }
`;
