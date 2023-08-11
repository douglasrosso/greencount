import { Container, Subtitulo, Titulo } from "@components";
import * as S from "./SobreTemplateStyles";

export const SobreTemplate = () => {
  return (
    <Container>
      <Titulo>Sobre a Greencount</Titulo>
      <S.Sobre>
        <article>
          <p>O Sistema Greencount é uma solução inovadora de gestão de finanças pessoais  que se destaca como o seu melhor aliado na busca por uma vida financeira equilibrada e saudável. Projetado para simplificar e otimizar o controle de receitas e despesas mensais, o Greencount oferece uma abordagem abrangente para o gerenciamento das suas finanças, permitindo que você alcance suas metas financeiras de forma eficaz.
          </p>
          <Subtitulo>Lema</Subtitulo>
          <p>
            "Trilhe o Caminho para a Liberdade Financeira"
            Com o Greencount ao seu lado, cada passo que você dá em direção ao controle financeiro é uma jornada em direção à liberdade. Deixe que o nosso sistema cuide das complexidades, enquanto você constrói um futuro financeiro mais seguro e próspero.
          </p>
          <Subtitulo>Conclusão</Subtitulo>
          <p>
            O Sistema Greencount oferece uma abordagem refrescante e eficaz para a gestão de finanças pessoais, permitindo que você tome as rédeas do seu dinheiro e faça escolhas mais conscientes. Deixe o Greencount ser o guia na sua jornada rumo à estabilidade financeira, e comece a colher os frutos de uma vida financeira mais saudável e controlada.</p>
        </article>
      </S.Sobre>
    </Container>
  );
};
