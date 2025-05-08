import { useState } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Seo } from "../../components/Seo";
import { PRODUCTS } from "../../constants/mocks";

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
    <main className="container py-16">
      <Seo title="Detalles de pago" />
      <h1 className="text-5xl font-bold mb-12">Comprar</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 lg:grid lg:grid-cols-[2fr_1fr] gap-4"
      >
        <section className="border border-white rounded-md p-4 lg:order-2 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center">Resumen</h2>
          <div className="grid place-content-center text-center font-bold">
            <div className="flex">
              <span className="text-2xl">$</span>
              <span className="text-5xl">
                {PRODUCTS.reduce(
                  (total, product) => total + product.price,
                  0,
                ).toFixed(2)}
              </span>
            </div>
          </div>
          <ul className="space-y-2">
            {PRODUCTS.map((product, index) => (
              <li key={index} className="flex gap-4">
                <span className="w-5">{index + 1}.</span>
                <span className="line-clamp-1 w-24">{product.title}</span>
                <span>-</span>
                <span>${product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="lg:order-1">
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
            <div className="flex justify-center">
              <Button type="submit" variant="primary" className="" size="lg">
                Pagar
              </Button>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
};

