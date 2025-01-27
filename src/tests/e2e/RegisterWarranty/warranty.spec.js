import { test, expect } from '@playwright/test';
import { CreateWarrantyPage } from '../../../pages/CreateRegisterWarranty';
import { RegisterWarrantyUserData } from '../../../fixtures/RegisterWarrantyUserData';
import { RegisterWarrantyData} from  '../../../fixtures/RegisterWarrantyData';

test.describe("Create Register Warranty",() => {
    let createWarrantyPage;
    test.beforeEach(async ({ page }) => {
        createWarrantyPage = new CreateWarrantyPage(page);
        await createWarrantyPage.navigate();
    });

    test.only('TS-CreateRegisterWarranty-008: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - กรอกข้อมูลครบ, ช่องทางการซื้อขาย = ร้านมือถือ', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
        await createWarrantyPage.pressEnter();
        await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
        await createWarrantyPage.pressEnter();
        await page.locator('#mobileModelId').click();
        await page.locator(`text=${RegisterWarrantyData.MobileModel}`).click();
        await createWarrantyPage.clickProductDropdown();
        await page.locator(`text=${RegisterWarrantyData.Product}`).click();
        await createWarrantyPage.clickChannelBuyDropdown(),
        await page.locator(`text=ร้านมือถือ`).click()
        // await createWarrantyPage.clickWarrantyTypeDropdown();
        // await page.locator("text=ตลอดชีวิต").click();   
        // await createWarrantyPage.uploadINV(RegisterWarrantyData.INV);
        // await createWarrantyPage.uploadPackage(RegisterWarrantyData.Package);
        // await createWarrantyPage.clickSubmitButton() 
    });

    test.afterAll('Teardown', async () => {
        console.log('Done with tests');
        // ...
      });
});