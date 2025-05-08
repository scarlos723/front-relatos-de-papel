import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import backgroundImage from "../../assets/images/library.jpg";
import { Button } from "../../components/Button";
export const AccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/catalogo");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonRoute = (route: string) => {
    navigate(route);
  }

  return (
    <div className="relative w-full flex items-center justify-center h-screen text-white ">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover blur-sm brightness-75"
      />
      <div className="text-center max-w-lg p-6 z-0">
        <h1 className="text-4xl text-white font-bold mb-4">Relatos de Papel</h1>
        <p className="text-lg text-gray-100 mb-6">
          Bienvenido a Relatos de Papel, una librería donde cada historia cobra
          vida.
        </p>
        <div className="flex justify-center gap-4">
          <Button type="button" onClick={() => handleButtonRoute("/register")} variant="primary" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition cursor-pointer">
            Registrarse
          </Button>
          <Button type="button" onClick={() => handleButtonRoute("/catalogo")} variant="primary" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-600 transition cursor-pointer">
            Ver Catálogo
          </Button>
        </div>
      </div>
    </div>
  );
};