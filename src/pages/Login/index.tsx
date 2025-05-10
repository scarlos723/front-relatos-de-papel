import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ROUTES } from "../../constants/routes";
import { useUserStore } from "../../store/user";
import type { LoginFormValues } from "./types";

export const Login = () => {
  const formValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState<LoginFormValues>(formValues);
  const [error, setError] = useState<LoginFormValues>(formValues);
  const { setUser, setTokens } = useUserStore();
  const navigate = useNavigate();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newError: LoginFormValues = formValues;
    const { email, password } = values;

    if (!email.includes("@") || !email.includes("."))
      newError.email = "Email inválido";
    if (email.length === 0) newError.email = "El email es requerido";

    if (password.length === 0) newError.password = "La contraseña es requerida";

    setError(newError);

    return Object.values(newError).some((err) => err !== "");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) return;

    // TODO: Llamar API
    console.log("Form data:", values);
    setUser({
      id: 1,
      email: values.email,
      role: "User",
    });
    setTokens("accessToken", "refreshToken");
    // ------

    navigate(ROUTES.CATALOG);
  };

  return (
    <main className="container py-16 flex items-center justify-center">
      <form
        className="p-4 flex flex-col gap-4 min-w-[290px] w-full max-w-[400px] rounded-xl border"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>

        <Input
          id="email"
          label="Email"
          type="email"
          error={error.email}
          onChange={onChange}
        />
        <Input
          id="password"
          label="Contraseña"
          type="password"
          error={error.password}
          onChange={onChange}
        />
        <div className="w-full flex justify-center">
          <Button type="submit" variant="primary" className="w-max" size="lg">
            Iniciar Sesión
          </Button>
        </div>
        <h2 className="text-gray-400 text-sm text-center mb-2 cursor-pointer">
          ¿No tienes cuenta?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate(ROUTES.REGISTER)}
          >
            Regístrate
          </span>
        </h2>
      </form>
    </main>
  );
};
