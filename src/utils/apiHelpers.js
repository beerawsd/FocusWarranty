import { expect } from '@playwright/test';

export async function loginAndGetAccessToken(request) {
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

export async function generateWarrantyCode(request, accessToken) {
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
