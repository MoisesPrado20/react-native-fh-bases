interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombre: "Fernando",
    edad: 35,
    direccion: {
      pais: "Canadá",
      casaNo: 615,
    },
  };


  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>{JSON.stringify(persona,null,2)}</pre>
      </code>
    </>
  );
};
