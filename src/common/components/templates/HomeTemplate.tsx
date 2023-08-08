import { AttachMoney, VerticalAlignBottom, VerticalAlignTop } from "@mui/icons-material";
import * as S from "./HomeTemplateStyles";

export const HomeTemplate = () => {
  return (
    <S.Home>
      <main>
        <h1>Controle Financeiro</h1>
        <section>
          <button><span>Entradas</span><h2>R$ 435</h2><VerticalAlignTop /></button>
          <button><span>Saídas</span><h2>R$ - 435</h2><VerticalAlignBottom /></button>
          <button><span>Total</span><h2>R$ 435</h2><AttachMoney /></button>
        </section>
      </main>
    </S.Home>
  );
};
