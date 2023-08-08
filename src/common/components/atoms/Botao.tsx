
export interface IBotaoProps {
  texto: string,
  icone?: JSX.Element,
}

export const Botao = ({ texto, icone }: IBotaoProps) => {
  return (
    <button style={{ padding: "8px 20px", border: "none", backgroundColor: "#9ae5fb", borderRadius: "5px" }}>
      {icone}
      <p>{texto}</p>
    </button>
  );
};
