import { useContext } from "react";
import { UserContext } from "../hooks/useUser";

const Login = () => {
  const context = useContext(UserContext);
  return (
    <>
      <h1>SignIn to Eira</h1>
      <h4>{context?.user ? "conectado" : "desconectado"}</h4>
    </>
  );
};

export default Login;
