import { test, expect } from '@playwright/test';
import { CreateClaimPage } from '../../../pages/CreateClaimPage';
import { CreateClaimUserData } from '../../../fixtures/CreateClaimData';

test.describe("Create Register Warranty",() => {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    let createClaimPage;
    test.beforeEach(async ({ page }) => {
        createClaimPage = new CreateClaimPage(page);
        await createClaimPage.navigate();
    });

    test('TS-ClaimWarranty-012: ตรวจสอบการเลือกที่อยู่ - ที่อยู่เดิม', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/create-claim');
        await createClaimPage.fillTelephone(CreateClaimUserData.telephone);
        await createClaimPage.pressEnter();
        const message = await createClaimPage.getNotificationMessage();
        expect(message).toBe('ค้นหาเบอร์โทรศัพท์สำเร็จ');
        expect(await createClaimPage.getFullName()).toBe(CreateClaimUserData.name)
        await createClaimPage.selectRadio();
        expect(await createClaimPage.selectAddress.waitFor({ state: 'visible' }));
    });

    test('TS-ClaimWarranty-013: ตรวจสอบการเลือกที่อยู่ - เพิ่มที่อยู่ใหม่', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/create-claim');
        await createClaimPage.fillTelephone(CreateClaimUserData.telephone);
        await createClaimPage.pressEnter();
        const message = await createClaimPage.getNotificationMessage();
        expect(message).toBe('ค้นหาเบอร์โทรศัพท์สำเร็จ');
        expect(await createClaimPage.getFullName()).toBe(CreateClaimUserData.name)
        await createClaimPage.selectRadio2();
        expect(await createClaimPage.selectAddress.waitFor({ state: 'hidden' }));

    });

    test.afterAll('Teardown', async () => {
        console.log('Done with tests');
        // ...
      });
});