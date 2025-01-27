const { expect } = require('@playwright/test');

class MultiPostPage {
  constructor(page) {
    this.page = page;

    this.claimCodeInput = page.locator('input[name="claimCode"]')
    this.trackingNumberInput = page.locator('input[name="trackingNumber"]')
    this.shippingInput = page.locator('input[id="shippingId"]')
    this.notificationMessage = '.ant-modal-content';
    this.submitButton = page.locator('button[usefor="SUBMIT"]');
    this.notificationTitleMsg = '.ant-modal-confirm-title'
    this.notificationInnerMsg = '.ant-modal-confirm-content'
    this.errorMessage = page.locator('text=โปรดระบุ')
  }

    async navigate() {
        await this.page.goto('https://warranty-uat.dpluscrm.com:14989/multipost');
    }
    async fillclaimCode(claimCode) {
        await this.claimCodeInput.fill(claimCode);
    }
    async fillTrackingNumberInput() {
        await this.trackingNumberInput.fill();
    }
    async fillShippingInput() {
        await this.shippingInput.fill();
    }
    async pressEnter() {
        await this.page.keyboard.press('Enter');
    }
    async getTitleNotificationMessage() {
        return await this.page.locator(this.notificationTitleMsg).innerText();
    }   
    async getInnerNotificationMessage() {
        return await this.page.locator(this.notificationInnerMsg).innerText();
    }   
    async clickSubmitButton() {
        await this.submitButton.click();
    }
    async getErrorMessage() {
        await this.errorMessage.waitFor({ state: 'visible' }); // wait until the error message is visible
        await this.errorMessage.textContent();
    }
}

module.exports = {
    MultiPostPage,
};