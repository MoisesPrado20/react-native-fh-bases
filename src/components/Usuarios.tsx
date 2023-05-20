import useUsuarios from "../hooks/useUsuarios";
import { Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const { usuarios, paginaSiguiente,paginaAnterior,paginaActual,totalPaginas } = useUsuarios();

  const renderItem = ({
    id,
    avatar,
    first_name,
    last_name,
    email,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img src={avatar} alt={first_name} className="w-25 rounded-circle" />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>

      {paginaActual > 1 && (
        <button onClick={paginaAnterior} className="btn btn-primary me-4">
          Anteriores
        </button>
      )}

      {paginaActual !== totalPaginas && (
        <button onClick={paginaSiguiente} className="btn btn-primary">
          Siguientes
        </button>
      )}
    </>
  );
};
