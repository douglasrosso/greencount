
import * as S from "./HomeTemplateStyles";
import { Tabela } from "../molecules/Tabela";
import { PainelInfo } from "../molecules/PainelInfo";
import { AddButton } from "../atoms/AddButton";

export const HomeTemplate = () => {
  return (
    <S.Home>
      <main>
        <PainelInfo />
        <Tabela />
        <AddButton />
      </main>
    </S.Home>
  );
};
