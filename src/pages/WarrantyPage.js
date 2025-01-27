const { expect } = require('@playwright/test');

class WarrantyPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
  }

  async navigate() {
    await this.page.goto('https://warranty-uat.dpluscrm.com:14989/warranty');
  }


}

module.exports = {
    WarrantyPage,
};