import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutPage extends Page {

  public get inputName () {
    return $('#name');
  }

  public get inputPhone () {
    return $('#phone');
  }

  public get inputEmail () {
    return $('#email');
  }

  public get inputCountry () {
    return $('#country');
  }

  public get inputCity () {
    return $('#city');
  }

  public get inputAddress () {
    return $('#address');
  }

  public get buttonSubmit () {
    return $('button[type="submit"]');
  }

  public get message () {
    return $('#message');
  }

  public async fillCheckoutForm (name: string, phone: string, email: string, country: string, city: string, address: string) {
    await this.inputName.setValue(name);
    await this.inputPhone.setValue(phone);
    await this.inputEmail.setValue(email);
    await this.inputCountry.setValue(country);
    await this.inputCity.setValue(city);
    await this.inputAddress.setValue(address);
  }

  public async submitCheckout () {
    await this.buttonSubmit.click();
  }

  public open () {
    return super.open('pagar');
  }
}

export default new CheckoutPage();
