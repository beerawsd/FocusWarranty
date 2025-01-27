const { expect } = require('@playwright/test');

class UserPage {
  constructor(page) {
    this.page = page;
    this.passwordInput = page.locator('input[name="password"]');

    this.editButton = page.locator('button[usefor="EDIT3"]');

    this.nameInput = page.locator('input[]');
  }

    async navigate() {
        await this.page.goto('https://warranty-uat.dpluscrm.com:14989/user');
    }
    async clickEditBUtton() {
        await this.page.editButton.click();
    }

}

module.exports = {
    UserPage,
};