const { expect } = require('@playwright/test');

class CreateClaimPage {
  constructor(page) {
    this.page = page;
    this.telephoneInput = page.locator('input[name="telephone"]');
    this.fullNameInput = page.locator('input[name="fullName"]');
    this.notificationMessage = '.ant-notification-notice-message';

    //radio Address
    this.address = page.locator('input[type="radio"][value="false"]')
    this.oldAddress = page.locator('input[type="radio"][value="true"]')

    this.selectAddress = page.locator('input[id="customerAddressId"]')

    this.zipCodeInput = page.locator('input[id="zipCode"]')
    this.provinceDropdown = page.locator('input[id="provinceId"]')
    this.districtDropdown = page.locator('input[id="districtId"]')
    this.supDistrictDropdown = page.locator('input[id="subDistrictId"]')
    this.otherInput = page.locator('input[id="other"]')

    //claim
    this.warrantyIdInput = page.locator('input[id="warrantyId"]')
    this.breakDownDropdown = page.locator('input[id="breakdownId"]')
    this.detailInput = page.locator('input[name="detail1"]')

    //Img
    this.claimImageInput = page.locator('input[id="claimImage"]');

    //submit
    this.submitButton = 'button[usefor="SUBMIT"]';

  }

  async navigate() {
    await this.page.goto('https://warranty-uat.dpluscrm.com:14989/create-claim');
  }

	async fillTelephone(telephone) {
		await this.telephoneInput.fill(telephone);
	}
	async getFullName(){
		return await this.fullNameInput.inputValue(); // Call inputValue on Locator
	}
	async fillWarrantyCode(warrantyCode){
		await this.warrantyCodeInput.fill(warrantyCode)
	}
	async pressEnter() {
		await this.page.keyboard.press('Enter');
	}
  async getNotificationMessage() {
    return await this.page.locator(this.notificationMessage).innerText();
  }   
  async selectRadio() {
    await this.address.click();
  }
  async selectRadio2() {
    await this.oldAddress.click();
  }
  async fillZipCode(zipCode) {
    await this.zipCodeInput.fill(zipCode)
  }
  async fillProvince(province) {
    await this.provinceDropdown.fill(province)
  }
  async fillDistrict(district) {
    await this.districtDropdown.fill(district)
  }
  async fillSupDistrict(supDistrict) {
    await this.supDistrictDropdown.fill(supDistrict)
  }
  async fillWarranty() {

  }
  async fillBreakDown() {
    
  }
  async fillDetail() {
    
  }
  async uploadClaimImage(claimImagePath) {
		await this.claimImageInput.setInputFiles(claimImagePath);

  }

}

module.exports = {
    CreateClaimPage,
};