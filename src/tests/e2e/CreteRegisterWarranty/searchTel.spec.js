import { test, expect } from '@playwright/test';
import { CreateWarrantyPage } from '../../../pages/CreateRegisterWarranty';
import { RegisterWarrantyUserData } from '../../../fixtures/RegisterWarrantyUserData';

test.describe("Create Register Warranty: SearchTelephone",() => {
  
    test.use({ storageState: 'playwright/.auth/admin.json' });
    let createWarrantyPage;

    test.beforeEach(async ({ page }) => {
        createWarrantyPage = new CreateWarrantyPage(page);
        await createWarrantyPage.navigate();
    });

    test('TS-RegisterWarranty-001: ตรวจสอบการค้นหาลูกค้าผ่านเบอร์ติดต่อ - กรอกถูกต้อง มีในระบบ', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillTelephone(RegisterWarrantyUserData.telephone);
        await createWarrantyPage.pressEnter();
        const message = await createWarrantyPage.getNotificationMessage();
        expect(message).toBe('ค้นหาเบอร์โทรศัพท์สำเร็จ');
        expect(await createWarrantyPage.getFullName()).toBe(RegisterWarrantyUserData.name)
    });

    test('TS-RegisterWarranty-002: ตรวจสอบการค้นหาลูกค้าผ่านเบอร์ติดต่อ - ไม่กรอก', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillTelephone('');
        await createWarrantyPage.pressEnter();
        const message = await createWarrantyPage.getNotificationMessage();
        expect(message).toBe('the requested API endpoint does not exist');
    });

    test('TS-RegisterWarranty-003: ตรวจสอบการค้นหาลูกค้าผ่านเบอร์ติดต่อ - ไม่มีในระบบ', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillTelephone('0993474042');
        await createWarrantyPage.pressEnter();
        const message = await createWarrantyPage.getNotificationMessage();
        expect(message).toBe('ไม่พบลูกค้าในระบบ');
    });

    test('TS-RegisterWarranty-004: ตรวจสอบการค้นหาลูกค้าผ่านเบอร์ติดต่อ - รูปแบบไม่ถูกต้อง', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillTelephone('09934740');
        await createWarrantyPage.pressEnter();
        const message = await createWarrantyPage.getNotificationMessage();
        expect(message).toBe('รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง');
    });

    test.afterAll('Teardown', async () => {
        console.log('Done with tests');
        // ...
      });
});