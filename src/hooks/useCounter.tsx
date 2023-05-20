import { useState } from "react";

const useCounter = (inicial = 10) => {
  const [valor, setValor] = useState(inicial);

  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  return {
    valor,
    acumular 
  };
}

export default useCounter;