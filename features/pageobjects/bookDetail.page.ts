import { $ } from '@wdio/globals'
import Page from './page.js';

class BookDetailPage extends Page {

  public get buttonSubmit () {
    return $('button[type="submit"]');
  }

  public get buttonCart () {
    return $('#cart-button');
  }

  public get buttonCheckout () {
    return $('#checkout-button');
  }

  public async addCart () {
    await this.buttonSubmit.click();
  }

  public async goToCart () {
    await this.buttonCart.click();
  }

  public async submitCheckout () {
    await this.buttonCheckout.click();
  }

  public open () {
    return super.open('catalogo');
  }
}

export default new BookDetailPage();
