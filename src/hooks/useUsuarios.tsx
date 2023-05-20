import { useEffect, useState, useRef } from "react";
import { reqRespApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);
  //* Referencia para manejar la paginación
  const paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuarios();
  }, [paginaRef]);

  //* Llamada a la API
  const cargarUsuarios = async () => {
    //* Usuarios con paginacion
    const {data: {data,page,total_pages}} = await reqRespApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });
    
    setPaginaActual(page);
    setTotalPaginas(total_pages);
    setUsuarios(data);    

  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  }

  const paginaAnterior = () => {
    paginaRef.current--;
    cargarUsuarios();
  }

  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior,
    paginaActual,
    totalPaginas,
  };
};

export default useUsuarios;
