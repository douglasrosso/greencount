import * as S from "./HeaderStyles";
import { useSelection } from "@utils";

export const Header = () => {
  const { selecionado, mudaSelecao } = useSelection();

  const SelecionaIndice = (indice: number) => {
    return () => mudaSelecao(indice);
  };

  const CondicionalAtivo = (indice: number) => {
    return selecionado === indice ? 1 : 0;
  };

  return (
    <S.Header>
      <S.Nav>
        <ul>
          <S.ListItem to="/home" 
            ativo={CondicionalAtivo(0)}
            onClick={SelecionaIndice(0)}
          >
            Dashboard
          </S.ListItem>
          <S.ListItem to="/sobre"
            ativo={CondicionalAtivo(1)}
            onClick={SelecionaIndice(1)}
          >
            Sobre
          </S.ListItem>
          <S.ListItem to="/contato"
            ativo={CondicionalAtivo(2)}
            onClick={SelecionaIndice(2)}
          >
            Contato
          </S.ListItem>
          <S.ListItem to="#"
            ativo={CondicionalAtivo(3)}
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
