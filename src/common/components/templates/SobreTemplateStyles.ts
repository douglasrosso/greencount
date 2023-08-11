import styled from "styled-components";

export const Sobre = styled.main`
  width: 80%;
  margin-top: 3%;
  display: flex;
  gap: 30px;

  article {
    text-align: center;
    display: grid;
    gap: 10px;

    h2 {
      margin-top: 20px;
      color: rgba(0, 212, 255);
    }

    img {
      height: 350px;
      border-radius: 10px;
    }
    span {
      font-weight: bold;
      /* color: rgba(0, 212, 255, 0.4); */
    }
  }
`;
