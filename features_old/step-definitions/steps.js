import { Given, Then, When } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';

const pages = {
    login: LoginPage
}

Given(/^Estoy en la pagina de un item$/, async () => {
    await LoginPage.open()
}); 

When(/^Al dar click en el boton eliminar$/, async () => {
    await LoginPage.clickDeleteButton();
});

Then(/^Se debe eliminar el item y mostrar un mensaje de "([^"]*)"$/, async (message) => {
    await LoginPage.verifyDeletionMessage(message);
});

