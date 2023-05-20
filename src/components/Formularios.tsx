import useForm from "../hooks/useForm";



export const Formularios = () => {
  const { email,password, onChange } = useForm({
    email: "test@test.com",
    password: "123456",
  });

  return (
    <>
      <h3>Formularios</h3>

      <input
        type="text"
        onChange={onChange}
        className="form-control"
        name="email"
        value={email}
        placeholder="Email"
      />

      <input
        type="text"
        onChange={onChange}
        className="form-control my-2"
        name="password"
        value={password}
        placeholder="Password"
      />


    </>
  );
};
