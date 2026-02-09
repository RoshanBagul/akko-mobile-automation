const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.login('9995555555', '258814');
        await driver.pause(5000);
    });
});
