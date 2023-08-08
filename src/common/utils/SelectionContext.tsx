import React, { createContext, useContext, useState } from "react";

interface SelectionContextType {
  selecionado: number | null;
  mudaSelecao: (indice: number | null) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export const SelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selecionado, setSelecionado] = useState<number | null>(0);

  const mudaSelecao = (indice: number | null) => {
    setSelecionado(indice);
  };

  const valorContexto: SelectionContextType = {
    selecionado,
    mudaSelecao
  };

  return (
    <SelectionContext.Provider value={valorContexto}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContext);

  if (!context) {
    throw new Error("useSelection deve ser usado dentro de um SelectionProvider");
  }

  return context;
};
