const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[usefor="LOGIN"]');
    this.loginErrorMessage = page.locator('text="โปรดระบุ"')
    //this.errorMessageSelector = 'span.ant-typography.sc-eqUAAy.kFGOjV.css-qnu6hi';
    //this.errorMessage = page.locator('.error-message');
  }

  async navigate() {
    await this.page.goto('https://warranty-uat.dpluscrm.com:14989/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  
  async getErrorMessage() {
    await this.loginErrorMessage.waitFor({ state: 'visible' }); // wait until the error message is visible
    return this.loginErrorMessage.textContent(); // Fetch the error text
  }

}

module.exports = LoginPage;