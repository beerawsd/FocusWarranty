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

    test.only('TS-CreateRegisterWarranty-009: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - กรอกข้อมูลครบ, ช่องทางการซื้อขาย = ร้านค้าร่วมรายการ', async ({ page }) => {
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
        await page.locator(`text=ร้านค้าที่ร่วมรายการ`).click()
        // await createWarrantyPage.clickWarrantyTypeDropdown();
        // await page.locator("text=ปกติ").click();   
        // await createWarrantyPage.uploadINV(RegisterWarrantyData.INV);
        // await createWarrantyPage.uploadPackage(RegisterWarrantyData.Package);
        await createWarrantyPage.clickStoreDropdown();
        await page.locator(`text=nongsit`).click();
        // await createWarrantyPage.clickSubmitButton() 
        await page.pause()
    });
    test('TS-CreateRegisterWarranty-010: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - กรอกข้อมูลครบ, ช่องทางการซื้อขาย = FocusShop', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
        await createWarrantyPage.pressEnter();
        await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
        await createWarrantyPage.pressEnter();
        await createWarrantyPage.clickProductDropdown();
        await page.locator(`text=${RegisterWarrantyData.Product}`).click();
        await createWarrantyPage.clickChannelBuyDropdown(),
        await page.locator(`text=Focus Shop`).click()
        // await createWarrantyPage.clickWarrantyTypeDropdown();
        // await page.locator("text=ปกติ").click();   
        // await createWarrantyPage.uploadINV(RegisterWarrantyData.INV);
        // await createWarrantyPage.uploadPackage(RegisterWarrantyData.Package);
        await createWarrantyPage.clickStoreDropdown();
        await page.locator(`text=Rama3`).click();
        // await createWarrantyPage.clickSubmitButton() 
    });
    test('TS-CreateRegisterWarranty-011: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - กรอกข้อมูลครบ, ช่องทางการซื้อขาย =  Online', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
        await createWarrantyPage.pressEnter();
        await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
        await createWarrantyPage.pressEnter();
        await createWarrantyPage.clickProductDropdown();
        await page.locator(`text=${RegisterWarrantyData.Product}`).click();
        await createWarrantyPage.clickChannelBuyDropdown(),
        await page.locator(`text=Online`).click()
       
        // await createWarrantyPage.clickWarrantyTypeDropdown();
        // await page.locator("text=ปกติ").click();   
        // await createWarrantyPage.uploadINV(RegisterWarrantyData.INV);
        // await createWarrantyPage.uploadPackage(RegisterWarrantyData.Package);
        // await createWarrantyPage.clickSubmitButton() 
    });

    // Alternative case
    test('TS-CreateRegisterWarranty-0012: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - ไม่กรอก เบอร์ติดต่อ', async ({ page }) => {
        await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
        await createWarrantyPage.pressEnter();
        await page.locator('#mobileModelId').click();
        await page.locator(`text=${RegisterWarrantyData.MobileModel}`).click();
        await createWarrantyPage.clickProductDropdown();
        await page.locator(`text=${RegisterWarrantyData.Product}`).click();
        await createWarrantyPage.clickChannelBuyDropdown();
        await page.locator(`text=${RegisterWarrantyData.ChannelBuy}`).click();
        // await createWarrantyPage.clickWarrantyTypeDropdown();
        // await page.locator("text=ปกติ").click();   
        // await createWarrantyPage.uploadINV(RegisterWarrantyData.INV);
        // await createWarrantyPage.uploadPackage(RegisterWarrantyData.Package);
        await createWarrantyPage.clickSubmitButton() 
        expect(await createWarrantyPage.alertTelephoneInput.waitFor({ state: 'visible' }));
        expect(await createWarrantyPage.alertFullNameInput.waitFor({ state: 'visible' }));
       
    });
    test('TS-CreateRegisterWarranty-0013: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - ไม่กรอกรหัสรับประกันสินค้า', async ({ page }) => {
        await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
        await createWarrantyPage.pressEnter();
        await createWarrantyPage.clickSubmitButton() 
        expect(await createWarrantyPage.alertWarrantyCodeInput.waitFor({ state: 'visible' }));
    });

    // test('TS-CreateRegisterWarranty-0014: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - ไม่กรอกยี่ห้อมือถือ', async ({ page }) => {
    //     await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
    //     await createWarrantyPage.pressEnter();
    //     await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
    //     await createWarrantyPage.pressEnter();
    //     await page.fill('#mobileBrandId', ''); 
    //     await page.locator('#mobileModelId').click();
    //     await page.locator(`text=${RegisterWarrantyData.MobileModel}`).click();
    //     await createWarrantyPage.clickProductDropdown();
    //     await page.locator(`text=${RegisterWarrantyData.Product}`).click();
    //     await createWarrantyPage.clickChannelBuyDropdown();
    //     await page.locator(`text=${RegisterWarrantyData.ChannelBuy}`).click();
    // await createWarrantyPage.clickWarrantyTypeDropdown();
    // await page.locator("text=ตลอดชีวิต").click();   
    // await createWarrantyPage.uploadINV(RegisterWarrantyData.INV);
    // await createWarrantyPage.uploadPackage(RegisterWarrantyData.Package);
    // await createWarrantyPage.clickSubmitButton() 
    // });

    test('TS-CreateRegisterWarranty-0015: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - ไม่กรอก  รุ่นมือถือ', async ({ page }) => {
      await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
        await createWarrantyPage.pressEnter();
        await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
        await createWarrantyPage.pressEnter();
        await createWarrantyPage.clickSubmitButton()
        expect(await createWarrantyPage.alertMobileModelDropdown.waitFor({ state: 'visible' }));

    });
    test('TS-CreateRegisterWarranty-0016: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - ไม่กรอก  ชื่อสินค้า', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
        await createWarrantyPage.pressEnter();
        await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
        await createWarrantyPage.pressEnter();
        await createWarrantyPage.clickChannelBuyDropdown();
        await page.locator(`text=${RegisterWarrantyData.ChannelBuy}`).click();
        // await createWarrantyPage.clickWarrantyTypeDropdown();
        // await page.locator("text=ตลอดชีวิต").click();   
        // await createWarrantyPage.uploadINV(RegisterWarrantyData.INV);
        // await createWarrantyPage.uploadPackage(RegisterWarrantyData.Package);
        await createWarrantyPage.clickSubmitButton() 
        expect(await createWarrantyPage.alertProductDropdown.waitFor({ state: 'visible' }));

    });
    test('TS-CreateRegisterWarranty-017:ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - ไม่กรอก  ช่องทางการซื้อขาย', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
        await createWarrantyPage.pressEnter();

        await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
        await createWarrantyPage.pressEnter();

        await createWarrantyPage.clickProductDropdown();
        await page.locator(`text=${RegisterWarrantyData.Product}`).click();
        
        await createWarrantyPage.clickWarrantyTypeDropdown();
        await page.locator("text=ตลอดชีวิต").click();   
        await createWarrantyPage.uploadINV(RegisterWarrantyData.INV);
        await createWarrantyPage.uploadPackage(RegisterWarrantyData.Package);
        await createWarrantyPage.clickSubmitButton() 
        expect(await createWarrantyPage.alertChannelBuyDropdown.waitFor({ state: 'visible' }));

    });
    // test('TS-CreateRegisterWarranty-0018: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - ไม่กรอก  ประเภทรับประกัน', async ({ page }) => {
    //     await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
    //     await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
    //     await createWarrantyPage.pressEnter();

    //     await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
    //     await createWarrantyPage.pressEnter();

    //     await createWarrantyPage.clickProductDropdown();
    //     await page.locator(`text=${RegisterWarrantyData.Product}`).click();
    //     await createWarrantyPage.clickChannelBuyDropdown();
    //     await page.locator(`text=${RegisterWarrantyData.ChannelBuy}`).click();
        
    //     await createWarrantyPage.uploadINV(RegisterWarrantyData.INV);
    //     await createWarrantyPage.uploadPackage(RegisterWarrantyData.Package);
    //     await createWarrantyPage.clickSubmitButton() 
    //     expect(await createWarrantyPage.alertWarrantyTypeDropdown.waitFor({ state: 'visible' }));

    // });
    // test('TS-CreateRegisterWarranty-0019: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - ไม่อัปโหลด  รูปใบเสร็จ', async ({ page }) => {
    //     await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
    //     await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
    //     await createWarrantyPage.pressEnter();

    //     await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
    //     await createWarrantyPage.pressEnter();

    //     await createWarrantyPage.clickProductDropdown();
    //     await page.locator(`text=${RegisterWarrantyData.Product}`).click();
    //     await createWarrantyPage.clickChannelBuyDropdown();
    //     await page.locator(`text=${RegisterWarrantyData.ChannelBuy}`).click();
    //     await createWarrantyPage.clickWarrantyTypeDropdown();
    //     await page.locator("text=ตลอดชีวิต").click();   
       
    //     await createWarrantyPage.uploadPackage(RegisterWarrantyData.Package);
    //     await createWarrantyPage.clickSubmitButton() 
    //     expect(await createWarrantyPage.alertInvInput.waitFor({ state: 'visible' }));

    // });
    // test('TS-CreateRegisterWarranty-0020: ตรวจสอบการบันทึกลงทะเบียนรับประกันสินค้า - ไม่อัปโหลด  รูปสินค้า', async ({ page }) => {
    //     await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
    //     await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
    //     await createWarrantyPage.pressEnter();

    //     await createWarrantyPage.fillWarrantyCode(RegisterWarrantyData.WarrantyCode)
    //     await createWarrantyPage.pressEnter();

    //     await createWarrantyPage.clickProductDropdown();
    //     await page.locator(`text=${RegisterWarrantyData.Product}`).click();
    //     await createWarrantyPage.clickChannelBuyDropdown();
    //     await page.locator(`text=${RegisterWarrantyData.ChannelBuy}`).click();
    //     await createWarrantyPage.clickWarrantyTypeDropdown();
    //     await page.locator("text=ตลอดชีวิต").click();   
    //     await createWarrantyPage.uploadINV(RegisterWarrantyData.INV);
        
    //     await createWarrantyPage.clickSubmitButton() 
    //     expect(await createWarrantyPage.alertPackageInput.waitFor({ state: 'visible' }));

    // });
    test.afterAll('Teardown', async () => {
        console.log('Done with tests');
        // ...
      });
});