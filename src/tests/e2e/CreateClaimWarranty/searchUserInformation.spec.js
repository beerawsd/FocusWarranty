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

    test('TS-ClaimWarranty-008: ตรวจสอบการค้นหาลูกค้าผ่านเบอร์ติดต่อ - กรอกถูกต้อง มีในระบบ', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/create-claim');
        await createClaimPage.fillTelephone(CreateClaimUserData.telephone);
        await createClaimPage.pressEnter();
        const message = await createClaimPage.getNotificationMessage();
        expect(message).toBe('ค้นหาเบอร์โทรศัพท์สำเร็จ');
        expect(await createClaimPage.getFullName()).toBe(CreateClaimUserData.name)
    });

    test('TS-ClaimWarranty-009: ตรวจสอบการค้นหาลูกค้าผ่านเบอร์ติดต่อ - ไม่กรอก', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/create-claim');
        await createClaimPage.fillTelephone('');
        await createClaimPage.pressEnter();
        const message = await createClaimPage.getNotificationMessage();
        expect(message).toBe('the requested API endpoint does not exist');
    });

    test('TS-ClaimWarranty-010: ตรวจสอบการค้นหาลูกค้าผ่านเบอร์ติดต่อ - ไม่มีในระบบ', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/create-claim');
        await createClaimPage.fillTelephone('0993474042');
        await createClaimPage.pressEnter();
        const message = await createClaimPage.getNotificationMessage();
        expect(message).toBe('ไม่พบลูกค้าในระบบ');
    });

    test('TS-ClaimWarranty-011: ตรวจสอบการค้นหาลูกค้าผ่านเบอร์ติดต่อ - รูปแบบไม่ถูกต้อง', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/create-claim');
        await createClaimPage.fillTelephone('099347404');
        await createClaimPage.pressEnter();
        const message = await createClaimPage.getNotificationMessage();
        expect(message).toBe('รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง');
    });

    test.afterAll('Teardown', async () => {
        console.log('Done with tests');
        // ...
      });
});