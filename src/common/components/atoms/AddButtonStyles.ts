import styled from "styled-components";

export const AddButton = styled.button`
  background-color: #e90000;
  height: 70px;
  width: 70px;
  border-radius: 50px;
  border: unset;
  position: fixed;
  right: 30px;
  bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
    background-color: #fe0000;
  }

  svg {
    height: 40px;
    width: 40px;
    fill: #ffffff;
  }
`;
