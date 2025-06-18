import { $ } from '@wdio/globals'
import Page from './page.js';

class CatalogPage extends Page {

  public get inputUsername () {
    return $('#search');
  }

  public get firstBook () {
    return $('#book-card');
  }

  public async search (input: string) {
    await this.inputUsername.setValue(input);
  }

  public async selectFirstBook () {
    await this.firstBook.click();
  }

  public open () {
    return super.open('catalogo');
  }
}

export default new CatalogPage();
