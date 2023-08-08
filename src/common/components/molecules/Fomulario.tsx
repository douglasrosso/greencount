import { Input } from "@mui/icons-material";
import { Botao, IBotaoProps } from "../atoms/Botao";

export const Formulario = ({ texto, icone, ...props } : IBotaoProps) => {
  return (
    <form>
      <Input  {...props}/>
      <Botao icone={icone} texto={texto} />
    </form>
  );
};
