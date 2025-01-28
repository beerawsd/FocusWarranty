import { test, expect } from '@playwright/test';
import { log } from '../../../utils/logger';

test('POST /users should create a new user', async ({ request }) => {
    // ข้อมูลที่ใช้สำหรับ POST
    const login = {
      username: 'admin',
      password: '12345678',
    };
    // ส่ง POST request
    const response = await request.post('https://warranty-uat.dpluscrm.com/warranty/abm/api/v2/admin/auth/login', {
      data: login, // ข้อมูลที่ส่งไปใน POST body
    });
  
    // ตรวจสอบสถานะการตอบกลับ
    expect(response.status()).toBe(200);
  
    // ตรวจสอบข้อมูลที่ตอบกลับมา
    const responseData = await response.json();
    expect(responseData).toHaveProperty('success', true);
    expect(responseData).toHaveProperty('result.fullName', 'Administrator');
    expect(responseData).toEqual(expect.objectContaining({
      "success": true,
      "message": "Success",
    }))
    log(responseData.result.accessToken)

    const WarrantyCodeData = {
        categoryCode    :   "AA",
        name    :   "สีเขียวทะเล",
        expireDate  : "",
        remark  : "",
        qrCount :    1
 };
    const response2 = await request.post('http://159.223.74.75:10403/warranty/api/v2/serial-number/focus/generate', {
        headers: { Authorization: 
            `Bearer ${responseData.result.accessToken}`, 
        },
        data: WarrantyCodeData, // ข้อมูลที่ส่งไปใน POST body
      });
    
      // ตรวจสอบสถานะการตอบกลับ
    expect(response2.status()).toBe(200);
    const responseData2 = await response2.json();
    expect(responseData2).toHaveProperty('success', true);
    expect(responseData2).toEqual(expect.objectContaining({
      "success": true,
      "message": "Success",
    }))
    log(responseData2.result.items[0].warrantyNumberCode)

    
});

// Function to log in and retrieve an access token
async function loginAndGetAccessToken(request) {
    const loginData = {
        username: 'admin',
        password: '12345678',
    };

    const response = await request.post('https://warranty-uat.dpluscrm.com/warranty/abm/api/v2/admin/auth/login', {
        data: loginData,
    });

    expect(response.status()).toBe(200);

    const responseData = await response.json();
    expect(responseData).toHaveProperty('success', true);
    expect(responseData).toEqual(expect.objectContaining({
        success: true,
        message: "Success",
    }));

    log(responseData.result.accessToken);

    return responseData.result.accessToken;
}

// Function to generate a warranty code
async function generateWarrantyCode(request, accessToken) {
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
    expect(responseData).toHaveProperty('success', true);
    expect(responseData).toEqual(expect.objectContaining({
        success: true,
        message: "Success",
    }));

    log(responseData.result.items[0].warrantyNumberCode);

    return responseData.result.items[0].warrantyNumberCode;
}

// Main test
test('POST /users should create a new user and generate warranty code', async ({ request }) => {
    const accessToken = await loginAndGetAccessToken(request);
    const warrantyNumberCode = await generateWarrantyCode(request, accessToken);

    // Optionally, you can perform additional checks or log the final output
    log(`Generated warranty number code: ${warrantyNumberCode}`);
});
