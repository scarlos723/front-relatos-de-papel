import { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { CgCreditCard } from "react-icons/cg";
import { PiPaypalLogo, PiPlus } from "react-icons/pi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Seo } from "../../components/Seo";
import { TrashIcon } from "../../components/TrashIcon";
import { useCartStore } from "../../store/cart";
import { Book } from "../../types";

export const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [message, setMessage] = useState("");
  const [totals, setTotals] = useState({
    subtotal: 0,
    shipping: 0,
    total: 0,
    products: 0,
  });

  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(`Pago realizado exitosamente con ${paymentMethod}`);
  };

  const handleAddItem = (product: Book) => {
    addItem({ ...product, quantity: 1 });
  };

  useEffect(() => {
    const subtotal = items.reduce(
      (total, product) => total + product.price * (product.quantity ?? 1),
      0
    );
    const shipping = 0;
    const total = subtotal + shipping;
    const products = items.reduce(
      (total, product) => total + (product.quantity ?? 1),
      0
    );
    setTotals({ subtotal, shipping, total, products });
  }, [items]);
  return (
    <main className="container py-16">
      <Seo title="Detalles de pago" />
      <h1 className="text-5xl font-bold mb-12">Informacion de Pago</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 lg:grid lg:grid-cols-[2fr_1fr] gap-4"
      >
        <section className="bg-gray-300/10 shadow-lg rounded-md p-4 lg:order-2 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">En el carrito:</h2>
          <hr />
          <ul className="space-y-2 max-h-[300px] overflow-y-auto">
            {items.map((product, index) => (
              <li key={index} className="flex gap-4">
                <article className="grid grid-cols-[48px_1fr] gap-4 p-2 rounded-md  w-full">
                  <div>
                    <img
                      className="object-cover w-[48px] aspect-square rounded-md"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div className="flex space-x-4 items-center">
                    <div className="flex flex-col">
                      <h3 className="text-md font-semibold line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-sm  font-bold">
                        ${" "}
                        {Number(
                          (product?.quantity ?? 1) * (product?.price ?? 0)
                        ).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-center border rounded-full px-2">
                      <button
                        type="button"
                        className="p-1 cursor-pointer"
                        onClick={() => removeItem(product.id)}
                      >
                        {product?.quantity === 1 ? <TrashIcon /> : <BiMinus />}
                      </button>

                      <p className="text-sm font-bold p-2 text-center">
                        {product?.quantity}
                      </p>
                      <button
                        type="button"
                        className="p-1 cursor-pointer"
                        onClick={() => handleAddItem(product)}
                      >
                        <PiPlus />
                      </button>
                    </div>
                  </div>
                </article>
                {index !== items.length - 1 && <hr />}
              </li>
            ))}
          </ul>
          <hr />
          <div>
            <div>productos: {totals.products} </div>
            <div className="flex justify-between text-2xl">
              <span> Subtotal: </span>
              <span>
                $ {""}
                {totals.subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between ">
              <span>Envio:</span>{" "}
              <span className="font-bold">
                {totals.shipping === 0
                  ? "Gratis"
                  : `$ ${totals.shipping.toFixed(2)}`}
              </span>
            </div>
          </div>
          <hr />
          <div className="flex justify-between text-3xl font-bold">
            <span> Total: </span>
            <span>
              $ {""}
              {totals.total.toFixed(2)}
            </span>
          </div>
        </section>
        <section className="lg:order-1">
          <div className="grid lg:grid-cols-2 gap-4">
            <Input id="name" label="Nombre Completo" type="text" />
            <Input id="phone" label="Teléfono" type="tel" />
            <Input id="email" label="Correo Electrónico" type="email" />
            <Input id="country" label="Pais" type="text" />
            <Input id="city" label="Ciudad" type="text" />
            <Input id="address" label="Dirección" type="text" />
            <div className="py-4 border rounded-2xl p-4">
              <h2 className="text-xl font-semibold mb-2">Método de Pago</h2>
              <div className="space-y-2 flex gap-4">
                <div>
                  <label
                    className={`flex items-center space-x-2 transition ${
                      paymentMethod === "paypal"
                        ? "text-blue-400 font-bold"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={handlePaymentChange}
                      className="h-4 w-4"
                    />
                    <div className="flex items-center space-x-2">
                      <PiPaypalLogo></PiPaypalLogo>
                      <span>PayPal</span>
                    </div>
                  </label>
                </div>
                <div>
                  <label
                    className={`flex items-center space-x-2 transition ${
                      paymentMethod === "creditCard"
                        ? "text-blue-400 font-bold"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={paymentMethod === "creditCard"}
                      onChange={handlePaymentChange}
                      className="h-4 w-4"
                    />
                    <div className="flex items-center space-x-2">
                      <CgCreditCard></CgCreditCard>
                      <span>Tarjeta de Crédito</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="grid mt-10">
            <Button type="submit" variant="primary" className="" size="lg">
              Pagar
            </Button>
          </div>
          {message && (
            <div id="message" className="mt-4 text-green-500 font-semibold">
              {message}
            </div>
          )}
        </section>
      </form>
    </main>
  );
};
