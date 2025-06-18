import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import CatalogPage from '../pageobjects/catalog.page.js';
import BookDetailPage from '../pageobjects/bookDetail.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';

const pages = {
  catalogo: CatalogPage,
  detalle: BookDetailPage, // Assuming you have a BookDetailPage
  pagar: CheckoutPage
}

Given(/^Estoy en la pagina de (\w+)$/, async (page) => {
  await pages[page].open()
});

When(/^Busco el libro (\w+)$/, async (input) => {
  await CatalogPage.search(input);
});

When(/^Hago clic en el primer libro de la lista$/, async () => {
  await CatalogPage.selectFirstBook();
});

When(/^Agrego el libro al carrito de compras$/, async () => {
  await BookDetailPage.addCart();
});

When(/^Voy al carrito de compras$/, async () => {
  await BookDetailPage.goToCart();
});

When(/^Hago clic en el boton de pagar$/, async () => {
  await BookDetailPage.submitCheckout();
});

When(/^Lleno el formulario de pago con los siguientes datos$/, async (dataTable) => {
  const data = dataTable.hashes();
  await CheckoutPage.fillCheckoutForm(
    data[0].name,
    data[0].phone,
    data[0].email,
    data[0].country,
    data[0].city,
    data[0].address
  );
});

When(/^Confirmo el pago$/, async () => {
  await CheckoutPage.submitCheckout();
})

Then(/^Veo un mensaje de confirmación de compra$/, async () => {
  await expect(CheckoutPage.message).toBeExisting();
  await expect(CheckoutPage.message).toHaveText(expect.stringContaining("Pago realizado exitosamente con paypal"));
});

