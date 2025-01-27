const { expect } = require('@playwright/test');

class RegisterWarrantyPage {
  constructor(page) {
    this.page = page;
    this.registerButton = page.locator('button[usefor="WARRANTY"]')
  }

  async clickRegisterButton() {
    await this.page.click(this.registerButton);
  }
  async navigate() {
    await this.page.goto('https://warranty-uat.dpluscrm.com:14989/Warranty');
  }


}

module.exports = RegisterWarrantyPage;