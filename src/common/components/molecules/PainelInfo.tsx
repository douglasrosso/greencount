import { AttachMoneyRounded, VerticalAlignBottomRounded, VerticalAlignTopRounded } from "@mui/icons-material";
import * as S from "./PainelInfoStyles";

export const PainelInfo = () => {
  return (
    <S.PainelInfo>
      <h1>Controle Financeiro</h1>
      <section>
        <button><span>Entradas</span><h2>R$ 435</h2><VerticalAlignTopRounded /></button>
        <button><span>Saídas</span><h2>R$ - 435</h2><VerticalAlignBottomRounded /></button>
        <button><span>Total</span><h2>R$ 435</h2><AttachMoneyRounded /></button>
      </section>
    </S.PainelInfo>
  );
};
