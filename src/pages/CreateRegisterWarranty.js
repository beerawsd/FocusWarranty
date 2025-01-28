const { expect } = require('@playwright/test');
const { fileURLToPath } = require('url');
import * as dotenv from 'dotenv';
dotenv.config();
import { log } from '../utils/logger';

class CreateWarrantyPage {
  constructor(page) {
    this.page = page;
    this.notificationMessage = '.ant-notification-notice-message';
    //locatorUserForm
    this.telephoneInput = page.locator('input[name="telephone"]');
    this.fullNameInput = page.locator('input[name="fullName"]');
	//locatorWarrantyForm
    this.warrantyCodeInput = page.locator('input[name="warrantyNumberCode"]');

	//dropdown
	this.mobileBrandDropdown = page.locator('input[id="mobileBrandId"]')
	
	this.mobileModelDropdown = page.locator('div[type="DROPDOWN_TWO"]')//input[id="mobileModelId]
    //locatordropdown: product
	this.productDropdown = page.locator('input[id="mapProductId"]')
	//locatordropdown: id="channelBuyId"
	this.channelBuyDropdown = page.locator('input[id="channelBuyId"]')
	//locatordropdown: WarrantyType
	this.warrantyTypeDropdown = page.locator('input[id="warrantyTypeId"]')
	//locatordropdown: Store
	this.storeInput = page.locator('input[id="storeId"]')
    //locatorImageInput
    this.invInput = page.locator('input[id="invImage"]');
    this.packageInput = page.locator('input[id="packageImage"]');
    //locatorSubmitButton
	this.submitButton = 'button[usefor="SUBMIT"]';

	//Alert Form
	this.alertTelephoneInput = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/main/div[1]/div/div/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/span');
    this.alertFullNameInput = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/main/div[1]/div/div/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/span');
	this.alertWarrantyCodeInput = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/main/div[1]/div/div/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/span');
	this.alertMobileBrandDropdown = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/main/div[1]/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[3]/span');
	this.alertMobileModelDropdown = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/main/div[1]/div/div/div[2]/div[2]/div/div/div[2]/div[3]/div[3]/span');
	this.alertProductDropdown = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/main/div[1]/div/div/div[2]/div[2]/div/div/div[2]/div[4]/div[3]/span');
	this.alertChannelBuyDropdown = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/main/div[1]/div/div/div[2]/div[2]/div/div/div[2]/div[5]/div[3]/span');
	this.alertWarrantyTypeDropdown = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/main/div[1]/div/div/div[2]/div[2]/div/div/div[2]/div[6]/div[3]/span');
	this.alertInvInput = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/main/div[1]/div/div/div[2]/div[2]/div/div/div[2]/div[8]/div[2]/span');
	this.alertPackageInput = page.locator('xpath=/html/body/div[1]/div/div/div/div[2]/main/div[1]/div/div/div[2]/div[2]/div/div/div[2]/div[9]/div[2]/span');
  }

	async navigate() {
		await this.page.goto('https://warranty-uat.dpluscrm.com:20119/warranty-add');
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
	
	async clickProductDropdown() {
		await this.productDropdown.click()
	}
	async clickWarrantyTypeDropdown() {
		await this.warrantyTypeDropdown.click()
	}
	async clickChannelBuyDropdown() {
		await this.channelBuyDropdown.click()
	}
	async clickMobileBrandDropdown() {
		await this.mobileBrandDropdown.click()
	}
	async clickMobileModelDropdown(MobileModel) {
		await this.mobileModelDropdown.click(MobileModel)
	}
	async uploadINV(invPath) {
		await this.invInput.setInputFiles(invPath);
	}

	async uploadPackage(packagePath) {
		await this.packageInput.setInputFiles(packagePath);

	}
	async clickSubmitButton() {
        await this.page.click(this.submitButton);
    }
	
	async clickStoreDropdown(store){
		await this.storeInput.click(store)
	}
	async loginAndGetAccessToken(request) {
		const loginData = {
		    username: process.env.NAME,
		    password: process.env.PASSWORD,
		};
		const response = await request.post('https://warranty-uat.dpluscrm.com/warranty/abm/api/v2/admin/auth/login', {
			data: loginData,
		});
		const responseData = await response.json();
		return responseData.result.accessToken;
	}
	async generateWarrantyCode(request, accessToken) {
		const warrantyCodeData = {
		    categoryCode: "AA",
		    name: "สีเขียวทะเล",
		    expireDate: "",
		    remark: "",
		    qrCount: 1,
		};
		const response = await request.post('http://159.223.74.75:10403/warranty/api/v2/serial-number/focus/generate', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			data: warrantyCodeData,
		});
		expect(response.status()).toBe(200);
		const responseData = await response.json();
		log(responseData.result.items[0].warrantyNumberCode);
		return responseData.result.items[0].warrantyNumberCode;
	}
}


module.exports = {
    CreateWarrantyPage,
};




// Function to generate a warranty code
