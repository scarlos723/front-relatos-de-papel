import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ROUTES } from "../../routes";
import { useUserStore } from "../../store/user";
import type { RegisterFormValues } from "./types";

export const Register = () => {
  const formValues: RegisterFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [values, setValues] = useState<RegisterFormValues>(formValues);
  const [error, setError] = useState<RegisterFormValues>(formValues);
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
    const newError: RegisterFormValues = formValues;
    const { email, password, confirmPassword } = values;

    if (!email.includes("@") || !email.includes("."))
      newError.email = "Email inválido";
    if (email.length === 0) newError.email = "El email es requerido";

    if (password.length < 6)
      newError.password = "La contraseña debe tener al menos 6 caracteres";
    if (password.length === 0) newError.password = "La contraseña es requerida";

    if (password !== confirmPassword)
      newError.confirmPassword = "Las contraseñas no coinciden";
    if (confirmPassword.length === 0)
      newError.confirmPassword = "La confirmación de contraseña es requerida";

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
        className=" flex min-w-[290px] w-full max-w-[400px] flex-col gap-4 p-4 rounded-xl border"
        onSubmit={handleSubmit}
      >
        <h2>
          <span className="text-2xl font-bold mb-4">Crear una cuenta</span>
        </h2>
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
        <Input
          id="confirmPassword"
          label="Confirmar Contraseña"
          type="password"
          error={error.confirmPassword}
          onChange={onChange}
        />
        <div className="w-full flex justify-center">
          <Button type="submit" variant="primary" className="w-max" size="lg">
            Crear Cuenta
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-sm text-gray-400">
            ¿Ya tienes una cuenta?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              Inicia sesión
            </span>
          </p>
        </div>
      </form>
    </main>
  );
};
