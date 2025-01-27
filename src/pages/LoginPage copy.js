const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[usefor="LOGIN"]');
    
    this.loginErrorMessageUsername = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[1]/div[2]/span') // 
    this.loginErrorMessagePassword = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div[2]/span') // 


    //this.errorMessageSelector = 'span.ant-typography.sc-eqUAAy.kFGOjV.css-qnu6hi';
    //this.errorMessage = page.locator('.error-message');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async waitLanding(){
    await page.waitForSelector('text=Administrator [UW93EGR5]', { state: 'visible' });
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessageUsername() {
    await this.loginErrorMessageUsername.waitFor({ state: 'visible' }); // wait until the error message is visible
    return this.loginErrorMessageUsername.textContent(); // Fetch the error text
  }

  async getErrorMessagePassword() {
    await this.loginErrorMessagePassword.waitFor({ state: 'visible' }); // wait until the error message is visible
    return this.loginErrorMessagePassword.textContent(); // Fetch the error text
  }

}

module.exports = LoginPage;