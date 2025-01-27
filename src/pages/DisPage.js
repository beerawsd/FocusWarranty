const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.claimIdInput = page.locator()
    this.BrandIdInput = page.locator()

    this.QRCodeInput = page.locator()

  }

  async navigate() {
    await this.page.goto('https://warranty-uat.dpluscrm.com:14989/');
  }

  async pressEnter() {
    await this.page.keyboard.press('Enter');
}

}

module.exports = LoginPage;