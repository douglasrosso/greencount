import styled, { css } from "styled-components";

export const Header = styled.header`
   height: 15%;
   background-color: #f8f8f8;
   border-bottom: 2px solid rgba(0, 0, 0, 0.15);
   align-items: center;
   display: flex;
   justify-content: center;
`;

export const Nav = styled.nav`
display: flex;


ul {
  display: flex;
  gap: 50px;
}

button {
  margin-left: 150px;
  border: unset;
  background-color: unset;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }
}
`;

export const ListItem = styled.li<{ ativo?: number }>`

  list-style: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }

  ${props =>
    props.ativo && css`
      color: red;
    `}
 
`;
