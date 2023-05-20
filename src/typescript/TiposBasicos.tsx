/* eslint-disable prefer-const */


export const TiposBasicos = () => {
  const nombre = "Fernando";
  const edad = 35;
  const estaActivo = false;

  const poderes: string[] = []; // "Velocidad", "Volar", "Respirar en el agua"

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre},{edad},{estaActivo ? "Activo" : "No activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
}
