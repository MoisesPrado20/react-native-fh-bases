import { ChangeEvent, useState } from "react";

const useForm = <T extends Record<string, unknown>>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return {
    ...state,
    state,
    onChange,
  };
}

export default useForm;
