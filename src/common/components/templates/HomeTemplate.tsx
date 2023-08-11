
import * as S from "./HomeTemplateStyles";
import { AddButton, Container, PainelInfo, Tabela } from "@components";

export const HomeTemplate = () => {
  return (
    <Container>
      <S.Home>
        <PainelInfo />
        <Tabela />
        <AddButton />
      </S.Home>
    </Container>
  );
};
