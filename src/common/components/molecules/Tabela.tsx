import React, { useState } from "react";
import * as S from "./TabelaStyles";

type Colunas = {
  Descricao: string;
  Valor: string;
  Categoria: string;
  Data: string;
  Gerenciar: number;
};

export const Tabela = () => {
  const [data, setData] = useState<Colunas[]>([{ Descricao: "Recebimento de aluguel", Valor: "800,14", Categoria: "Aluguel", Data: "12/08/2023", Gerenciar: 1 },
  { Descricao: "Contas da casa", Valor: "572,61", Categoria: "Casa", Data: "23/08/2023", Gerenciar: 2 },
  { Descricao: "Salário", Valor: "192,41", Categoria: "Trabalho", Data: "29/08/2023", Gerenciar: 3 },
  { Descricao: "Rancho do mercado", Valor: "-50,62", Categoria: "Casa", Data: "11/08/2023", Gerenciar: 4 }]);

  const colunaConfig: Record<keyof Colunas, (linha: Colunas, indiceLinha: number) => React.ReactNode> = {
    Descricao: (linha) => linha["Descricao"],
    Valor: (linha) => `R$ ${linha["Valor"]}`,
    Categoria: (linha) => linha["Categoria"],
    Data: (linha) => linha["Data"],
    Gerenciar: (_, indiceLinha) => (
      <>
        <button onClick={() => handleEditar(indiceLinha)}>Editar</button>
        <button onClick={() => handleExcluir(indiceLinha)}>Excluir</button>
      </>
    ),
  };

  const handleEditar = (indiceLinha: number) => {
    console.log(`Editar item na posição ${indiceLinha}`);
  };

  const handleExcluir = (indiceLinha: number) => {
    const newData = data.filter((_, index) => index !== indiceLinha);
    setData(newData);
  };

  if (data.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  }

  const colunas = Object.keys(data[0]) as (keyof Colunas)[];

  return (
    <S.Tabela>
      <thead>
        <tr>
          {colunas.map((coluna) => (
            <th key={coluna}>{coluna === "Descricao" ? "Descrição" : coluna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((linha, indiceLinha) => (
          <tr key={indiceLinha}>
            {colunas.map((coluna) => (
              <td key={coluna}>{colunaConfig[coluna](linha, indiceLinha)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.Tabela>
  );
};
