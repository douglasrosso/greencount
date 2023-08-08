import styled from "styled-components";

export const Home = styled.article`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: unset;
  background-color: #f8f8f8;
  box-shadow: inset rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;

  main {
    transform: translate(0, 50%);
    width: 80%;
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
        height: 100px;
        padding: 20px;
        border: 2px solid #c4c4c4c4;
        border-radius: 5px;
        background-color: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

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
  }
`;
