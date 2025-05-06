import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const AccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/catalogo");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center max-w-lg p-6">
        <h1 className="text-4xl font-bold mb-4">Relatos de Papel</h1>
        <p className="text-lg text-gray-400 mb-6">
          Bienvenido a Relatos de Papel, una librería donde cada historia cobra
          vida.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Registrarse
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
            Ver Catálogo
          </button>
        </div>
      </div>
    </div>
  );
};
