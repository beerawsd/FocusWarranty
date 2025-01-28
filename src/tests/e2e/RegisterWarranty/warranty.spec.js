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

    test('', async ({ page }) => {
        
    });

    test.afterAll('Teardown', async () => {
        console.log('Done with tests');
        // ...
      });
});