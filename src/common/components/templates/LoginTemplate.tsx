import { ChangeEvent, useState } from "react";
import * as S from "./LoginTemplateStyles";

export const LoginTemplate = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const CapturarEstado = (setParametro: (value: string) => void) => {
    return (event: ChangeEvent<HTMLInputElement>) => setParametro(event.target.value);
    console.log(email, senha);
  };

  return (
    <S.Login>
      <aside>
        <h1>Bem vindo ao <span>Greencount</span></h1>
        <p>Aqui você faz sua gestão de finanças pessoal de forma eficaz!</p>
      </aside>
      <S.Formulario>
        <h1>Login</h1>
        <section>
          <label htmlFor="email">E-mail</label>
          <S.TextField name="email" type="text" onChange={CapturarEstado(setEmail)} />
          <label htmlFor="senha">Senha</label>
          <S.TextField name="senha" type="password" onChange={CapturarEstado(setSenha)} />
          <S.FloatingButton>Sign in</S.FloatingButton>
        </section>
      </S.Formulario>
    </S.Login >

  );
};
