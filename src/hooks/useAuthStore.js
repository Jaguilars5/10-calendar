import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = ({ email, password }) => {
    // TODO: Aquí iría la petición al backend
    // Por ahora simulamos un login exitoso
    dispatch(
      onLogin({
        uid: "ABC123",
        name: email.split("@")[0],
        email: email,
      }),
    );
  };

  const startRegister = ({ name, email, password }) => {
    // TODO: Aquí iría la petición al backend
    // Por ahora simulamos un registro exitoso
    dispatch(
      onLogin({
        uid: "ABC123",
        name: name,
        email: email,
      }),
    );
  };

  const startLogout = () => {
    dispatch(onLogout());
  };

  return {
    // Propiedades
    status,
    user,
    errorMessage,

    // Métodos
    startLogin,
    startRegister,
    startLogout,
  };
};
