import { test, expect } from '@playwright/test';
import { CreateClaimPage } from '../../../pages/CreateClaimPage';
import { createClaimUserData } from '../../../fixtures/CreateClaimData';
import { AddressData } from '../../../fixtures/Address';
//import { createClaimData } from '../../../fixtures/Claim';

test.describe("Create Register Warranty",() => {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    let createClaimPage;
    test.beforeEach(async ({ page }) => {
        createClaimPage = new CreateClaimPage(page);
        await createClaimPage.navigate();
    });
    test('TS-ClaimWarranty-016: ตรวจสอบการบันทึกสร้างเคลม - กรอกข้อมูลครบ, เลือกที่อยู่ใหม่', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/create-claim');
        await createClaimPage.fillTelephone(createClaimUserData.telephone);
        await createClaimPage.pressEnter();
        const message = await createClaimPage.getNotificationMessage();
        expect(message).toBe('ค้นหาเบอร์โทรศัพท์สำเร็จ');
        expect(await createClaimPage.getFullName()).toBe(createClaimUserData.name)
        await createClaimPage.selectRadio2();

        await createClaimPage.fillZipCode(AddressData.zipCode)
        await createClaimPage.zipCodeInput(AddressData.province)
        await createClaimPage.zipCodeInput(AddressData.district)
        await createClaimPage.zipCodeInput(AddressData.SupDistrict)

        await createClaimPage.uploadClaimImage(createClaimData.ClaimImg)

        
    });
    test('TS-ClaimWarranty-017: ตรวจสอบการบันทึกสร้างเคลม - กรอกข้อมูลครบ, เลือกที่อยู่ใหม่', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/create-claim');
        await createClaimPage.fillTelephone(createClaimUserData.telephone);
        await createClaimPage.pressEnter();
        const message = await createClaimPage.getNotificationMessage();
        expect(message).toBe('ค้นหาเบอร์โทรศัพท์สำเร็จ');
        expect(await createClaimPage.getFullName()).toBe(createClaimUserData.name)
        await createClaimPage.selectRadio2();

        await createClaimPage.fillZipCode(AddressData.zipCode)
        await createClaimPage.zipCodeInput(AddressData.province)
        await createClaimPage.zipCodeInput(AddressData.district)
        await createClaimPage.zipCodeInput(AddressData.SupDistrict)

        await createClaimPage.uploadClaimImage(createClaimData.ClaimImg)

        
    });

    test.afterAll('Teardown', async () => {
        console.log('Done with tests');
        // ...
      });
});