import { Container, Titulo } from "@components";
import * as S from "./ContatoTemplateStyles";
import { FeedbackRounded, MailOutlineRounded, PhoneInTalkRounded } from "@mui/icons-material";

export const ContatoTemplate = () => {
  return (
    <Container>
      <Titulo>Como você prefere falar com a gente?</Titulo>
      <S.Contato>
        <article>
          <MailOutlineRounded />
          <h1>E-mail</h1>
          <p>Tem alguma duvida?</p>
          <span>greencount@gmail.com</span>
        </article>
        <article>
          <PhoneInTalkRounded />
          <h1>Telefone</h1>
          <p>Você pode ligar! <br/> 8:00 às 11:45 ou 13:00 às 18:00</p>
          <span>(48) 9 9856 1824</span>
        </article>
        <article>
          <FeedbackRounded />
          <h1>Feedback</h1>
          <p>Tem alguma sugestão, que tal deixar seu feedback?</p>
          <span>Basta abrir o formulário</span>
        </article>
      </S.Contato>
    </Container>
  );
};
