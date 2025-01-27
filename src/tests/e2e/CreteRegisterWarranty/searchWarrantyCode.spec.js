import { test, expect } from '@playwright/test';
import { CreateWarrantyPage } from '../../../pages/CreateRegisterWarranty';
import { validWarrantyCode, invalidWarrantyCode } from '../../../fixtures/RegisterWarrantyData';

test.describe("Create Register Warranty: Search Warranty Code",() => {
  
    test.use({ storageState: 'playwright/.auth/admin.json' });
    let createWarrantyPage;

    test.beforeEach(async ({ page }) => {
        createWarrantyPage = new CreateWarrantyPage(page);
        await createWarrantyPage.navigate();
    });

      validWarrantyCode.forEach((validCode,index) => {
        test(`TS-RegisterWarranty-005.${index + 1}}: ตรวจสอบการค้นหารหัสรับประกันสินค้า - กรอกถูกต้อง มีในระบบ`, async ({ page }) => {
            await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
            await page.locator('input[name="warrantyNumberCode"]').fill(validCode.Code)
            await createWarrantyPage.pressEnter();
            const message = await createWarrantyPage.getNotificationMessage();
            expect(message).toBe('ค้นหารหัสรับประกันสินค้าสำเร็จ');
            
        });
      })

    test('TS-RegisterWarranty-006: ตรวจสอบการค้นหารหัสรับประกันสินค้า - ไม่กรอก', async ({ page }) => {
        await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
        await createWarrantyPage.fillWarrantyCode('')
        await createWarrantyPage.pressEnter();
        const message = await createWarrantyPage.getNotificationMessage();
        expect(message).toBe('the requested API endpoint does not exist');
    });

    invalidWarrantyCode.forEach((invalidCode,index) => {
        test(`TS-RegisterWarranty-007.${index + 1}: ตรวจสอบการค้นหารหัสรับประกันสินค้า - ไม่มีในระบบ`, async ({ page }) => {
            await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:20119/warranty-add');
            await page.locator('input[name="warrantyNumberCode"]').fill(invalidCode.Code)
            await createWarrantyPage.pressEnter();
            const message = await createWarrantyPage.getNotificationMessage();
            expect(message).toBe('รหัสรับประกันไม่ถูกต้อง');
        });
    })
 

    test.afterAll('Teardown', async () => {
        console.log('Done with tests');
        // ...
      });
});