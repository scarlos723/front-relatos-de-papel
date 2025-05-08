import { useState } from "react";

import { Button } from "../../components/Button";
import { Seo } from "../../components/Seo";
import { PRODUCTS } from "../../constants/mocks";
import { Input } from "../../components/Input";

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
      />
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
            <Input id="name" label="Nombre Completo" type="text" />
            <Input id="phone" label="Teléfono" type="tel" />
            <Input id="email" label="Correo Electrónico" type="email" />
            <Input id="contry" label="Pais" type="text" />
            <Input id="city" label="Ciudad" type="text" />
            <Input id="address" label="Dirección" type="text" />
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