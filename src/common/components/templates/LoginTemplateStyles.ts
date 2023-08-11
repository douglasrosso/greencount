import styled from "styled-components";
import rota from "../../assets/background_sky.jpg";

export const Login = styled.article`
background-color: white; 
transform: translate(0, 50%); 
width: 80%; 
margin: 0 auto; 
display: flex ;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
border-radius: 5px;


aside {
  width: 50%; 
  background-image: url(${rota});
  padding: 70px;
  border-radius: 5px 0 0 5px;

  span {
    color: #149432;
  }

  h1 {
    font-size: 30px;
    border-bottom: 2px solid #149432;
  }

  p {
    font-weight: 600;
  }
}
`;

export const Formulario = styled.form`
  width: 50%; 
  padding: 70px; 
  display: flex; 
  align-items: center; 
  flex-direction: column; 
  gap: 20px;

  h1 {
    font-size: 45px;
  }

  label {
    align-self: start;
    font-weight: 600;
  }

  section {
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  button {
    margin-top: 20px;
  }
`;

export const TextField = styled.input` 
  padding-inline: 8px;
  height: 35px;
  width: 100%;
  border: 2px solid #00d4ff;
  border-radius: 7px;

  &:focus-visible {
    outline-color: #3d9cdd;
  }
`;

export const FloatingButton = styled.button` 
  padding: 10px 20px; 
  border: unset;
  border-radius: 5px;
  background-color: #00d4ff;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;