import { test as setup, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

//SETUP Admin Authen

const adminFile = 'src/config/playwright/.auth/admin.json';
setup('authenticate as admin', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto(`${process.env.BASE_URL}/account/login`);
  
  await page.locator('input[name="username"]').fill(process.env.NAME);
  console.log(process.env.USERNAME);
  await page.locator('input[name="password"]').fill(process.env.PASSWORD);
  await page.locator('button[usefor="LOGIN"]').click();
  await page.waitForURL('/');
 
  //Assert something 
  //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

  // End of authentication steps.
  await page.context().storageState({ path: adminFile });
});


// SETUP User authen

// const userFile = 'src/config/playwright/.auth/user.json';
// setup('authenticate as user', async ({ page }) => {
//   // Perform authentication steps. Replace these actions with your own.
//   await page.goto('https://warranty-uat.dpluscrm.com:14989/account/login');
//   await page.locator('input[name="username"]').fill('admin');
//   await page.locator('input[name="password"]').fill('12345678');
//   await page.locator('button[usefor="LOGIN"]').click();
//   await page.waitForURL('https://warranty-uat.dpluscrm.com:14989/');
 
//   //Assert something 
//   //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

//   // End of authentication steps.
//   await page.context().storageState({ path: userFile });
// });



/*
// SETUP API AUTH 
const authFile = 'src/config/playwright/.auth/user.json';
setup('authenticate', async ({ request }) => {
  // Send authentication request. Replace with your own.
  await request.post('https://github.com/login', {
    form: {
      'user': 'admin',
      'password': '12345678'
    }
  });
  await request.storageState({ path: authFile });
});*/