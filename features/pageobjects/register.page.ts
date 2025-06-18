import { $ } from '@wdio/globals'
import Page from './page.js';


class RegisterPage extends Page {

  public get inputEmail () {
    return $('#email');
  }

  public get inputPassword () {
    return $('#password');
  }

  public get inputConfirmPassword () {
    return $('#confirmPassword');
  }

  public get buttonRegister () {
    return $('button[type="submit"]');
  }

  public get messageError () {
    return $('#message-error-confirmPassword');
  }

  public get messagePasswordError () {
    return $('#message-error-password');
  }

  public async registerUser (email: string, password: string, confirmPassword: string) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.inputConfirmPassword.setValue(confirmPassword);
    await this.buttonRegister.click();
  }

  public open () {
    return super.open('registro');
  }
}

export default new RegisterPage();
