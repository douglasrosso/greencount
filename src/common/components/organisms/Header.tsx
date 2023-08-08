import * as S from "./HeaderStyles";
import { useSelection } from "../../utils/SelectionContext";

export const Header = () => {
  const { selecionado, mudaSelecao } = useSelection();

  const SelecionaIndice = (indice: number) => {
    return () => mudaSelecao(indice);
  };

  return (
    <S.Header>
      <S.Nav>
        <ul>
          <S.ListItem
            ativo={selecionado === 0}
            onClick={SelecionaIndice(0)}
          >
            Dashboard
          </S.ListItem>
          <S.ListItem
            ativo={selecionado === 1}
            onClick={SelecionaIndice(1)}
          >
            Sobre
          </S.ListItem>
          <S.ListItem
            ativo={selecionado === 2}
            onClick={SelecionaIndice(2)}
          >
            Contato
          </S.ListItem>
          <S.ListItem
            ativo={selecionado === 3}
            onClick={SelecionaIndice(3)}
          >
            Dados cadastrais
          </S.ListItem>
        </ul>
        <button>Sair</button>
      </S.Nav>
    </S.Header>

  );
};
