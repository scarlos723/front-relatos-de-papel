import { useState } from "react";
import { Button } from "../../components/Button";
import { Seo } from "../../components/Seo";
const PRODUCTS = [
  {
    title: "Producto 1",
    price: 10.00,
  },
  {
    title: "Producto 2",
    price: 20.00,
  },
  {
    title: "Producto 3",
    price:30.00,
  },
  {
    title: "Producto 4",
    price: 40.00,
  },
  {
    title: "Producto 5",
    price: 50.00,
  },
];


export const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Pago realizado con ${paymentMethod}`);
  };

  return (
    <main className="container">
      <Seo
        title="Detalles de pago"
      ></Seo>
      <h1 className="text-2xl font-bold mb-4">
        Comprar
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 lg:grid lg:grid-cols-[2fr_1fr] gap-4">
        <section className="border border-white rounded-md p-4 lg:order-2">
          <h2 className="text-xl font-semibold mb-2 text-center">Resumen</h2>
          <div className="grid place-content-center text-center text-2xl font-bold mt-4">

            <span>${
              PRODUCTS.reduce((total, product) => total + product.price, 0).toFixed(2)
            }
            </span>
          </div>
          <ul className="space-y-2">
            {PRODUCTS.map((product, index) => (
              <li key={index} className="flex justify-between gap-4">
                <span className="line-clamp-1">{product.title}</span>
                <span>-</span>
                <span>${product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

        </section>
        <section className="lg:order-1">
          <h2 className="text-xl font-semibold mb-2">Datos de Envío</h2>
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Pais
              </label>
              <input
                type="text"
                id="contry"
                name="contry"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Ciudad
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium">
                Dirección
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Método de Pago</h2>
              <div className="space-y-2 flex gap-4">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={handlePaymentChange}
                      className="h-4 w-4"
                    />
                    <span>PayPal</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={paymentMethod === "creditCard"}
                      onChange={handlePaymentChange}
                      className="h-4 w-4"
                    />
                    <span>Tarjeta de Crédito</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-auto"> <Button
              type="submit"
              variant="primary"
              className="w-full"
              size="lg"
            >
          Pagar
            </Button></div>
          </div>
        </section>

        {/* Ítems a comprar */}


        {/* Selector de tipo de pago */}


        {/* Botón de pagar */}

      </form>
    </main>
  );
};